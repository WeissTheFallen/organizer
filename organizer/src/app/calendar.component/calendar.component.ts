import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  today = new Date();
  selectedDate = this.today;
  showModal = false;
  mode: 'view' | 'new' = 'view';

  workers = [
    { id: 1, name: 'Worker 1' },
    { id: 2, name: 'Worker 2' },
    { id: 3, name: 'Worker 3' },
  ];

  locations = [
    { id: 1, name: 'Location A' },
    { id: 2, name: 'Location B' },
    { id: 3, name: 'Location C' },
  ];

  appointments = new Map<string, { workerId: number; locationId: number; timeOfDay: string }[]>();
  weeks: (Date | null)[][] = [];
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor(private router: Router) {
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.today.getFullYear();
    const month = this.today.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstWeekDay = firstDayOfMonth.getDay();
    let currentDate = new Date(year, month, 1 - firstWeekDay);
    this.weeks = [];
    while (currentDate <= lastDayOfMonth || currentDate.getDay() !== 0) {
      const week: (Date | null)[] = [];
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        week.push(currentDate.getMonth() === month ? new Date(currentDate) : null);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      this.weeks.push(week);
    }
  }

  isToday(date: Date | null): boolean {
    return !!date && date.toDateString() === this.today.toDateString();
  }

  onDayClick(date: Date | null) {
    if (date) {
      this.selectedDate = date;
      this.showModal = true;
      this.mode = 'view';
    }
  }

  closeModal() {
    this.showModal = false;
  }

  get currentDayAppointments() {
    return this.appointments.get(this.selectedDate.toDateString()) || [];
  }

  getWorkerName(workerId: number): string {
    const worker = this.workers.find((w) => w.id === workerId);
    return worker ? worker.name : 'Unknown';
  }

  getLocationName(locationId: number): string {
    const location = this.locations.find((l) => l.id === locationId);
    return location ? location.name : 'Unknown';
  }

  goToCreateAppointment() {
    const dateString = this.selectedDate.toISOString().slice(0, 10);
    this.closeModal();
    this.router.navigate(['/appointments/new', dateString]);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css'],
})
export class AppointmentCreateComponent implements OnInit {
  workers = [
    { id: 1, name: 'Worker 1' },
    { id: 2, name: 'Worker 2' },
    { id: 3, name: 'Worker 3' },
  ];
  categories = ['Category A', 'Category B', 'Category C'];

  selectedWorkerId?: number;
  dateString: string = '';
  timeString: string = '';
  title: string = '';
  category?: string;
  description: string = '';
  date!: Date;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const dateParam = this.route.snapshot.paramMap.get('date');
    if (dateParam) {
      this.date = new Date(dateParam + 'T00:00:00');
      this.dateString = dateParam; // Para el input date
    }
  }

  save() {
    if (
      this.selectedWorkerId &&
      this.dateString &&
      this.timeString &&
      this.title &&
      this.category &&
      this.description
    ) {
      const appointmentDateTime = new Date(`${this.dateString}T${this.timeString}`);
      alert(`Cita creada para ${appointmentDateTime}`);
      this.router.navigate(['/calendar']);
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  cancelCreation() {
    this.router.navigate(['/calendar']);
  }
}

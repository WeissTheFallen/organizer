import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component/calendar.component';
import { AppointmentCreateComponent } from './appointment-create.component/appointment-create.component';
import { UserCreationComponent } from './user-create.component/user-create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'users', component: UserCreationComponent },
  { path: 'appointments', component: AppointmentCreateComponent },
  { path: 'appointments/new/:date', component: AppointmentCreateComponent }
];

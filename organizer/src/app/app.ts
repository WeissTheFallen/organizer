import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="sidebar">
      <div class="logo">
        <img src="/assets/logo.png" alt="Oakdale Kitchens" />
      </div>
      <ul class="nav-list">
        <li>
          <a routerLink="/calendar" routerLinkActive="active">Calendar</a>
        </li>
        <li><a routerLink="/users" routerLinkActive="active">Users</a></li>
        <li>
          <a routerLink="/appointments" routerLinkActive="active"
            >Appointments</a
          >
        </li>
        <li><a routerLink="/" (click)="logout()">Logout</a></li>
      </ul>
    </nav> 
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class AppComponent {
  logout() {
    // logout logic here
  }
}

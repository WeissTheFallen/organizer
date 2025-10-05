import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-creation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreationComponent {
  roles = ['Admin', 'Manager', 'Worker', 'Guest'];

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    gender: new FormControl('')
  });

  onSave() {
    if (this.userForm.valid) {
      alert('User saved successfully: ' + JSON.stringify(this.userForm.value, null, 2));
      this.userForm.reset();
    } else {
      alert('Please fill all required fields correctly.');
    }
  }

  onCancel() {
    this.userForm.reset();
  }
}

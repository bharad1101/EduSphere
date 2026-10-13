
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  studentName = '';
  email = '';
  selectedCourse = '';
  submitted = false;

  courses = [
    'Web Programming',
    'Python Programming',
    'Artificial Intelligence'
  ];

  registerStudent(): void {
    this.submitted = true;
  }
}


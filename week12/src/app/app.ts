import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'EduSphere - Online Learning Platform';

  studentName = 'Rahul';

  course = 'Artificial Intelligence';

  message = '';

  showCourse = true;

  displayMessage(): void {
    this.message = 'Welcome to EduSphere, ' + this.studentName + '!';
  }

  toggleCourse(): void {
    this.showCourse = !this.showCourse;
  }
}

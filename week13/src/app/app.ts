import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  showCourses = true;

  courses = [
    'Web Programming',
    'Python Programming',
    'Artificial Intelligence'
  ];

  toggleCourses(): void {
    this.showCourses = !this.showCourses;
  }
}

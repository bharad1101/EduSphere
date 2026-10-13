
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {
  courses: string[];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }
}


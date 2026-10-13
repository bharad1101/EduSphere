
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: string[] = [
    'Web Programming',
    'Python Programming',
    'Artificial Intelligence'
  ];

  getCourses(): string[] {
    return this.courses;
  }
}


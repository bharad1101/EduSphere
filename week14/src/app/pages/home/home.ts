
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  welcomeMessage = 'Welcome to EduSphere!';
  description = 'Learn new skills and build your future with our online courses.';
}


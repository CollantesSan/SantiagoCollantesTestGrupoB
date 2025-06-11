import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseCardComponent } from './components/base-card/base-card'; // ✅ nuevo

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BaseCardComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'base-card-grupo-b';
}




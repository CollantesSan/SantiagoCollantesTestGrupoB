import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { InputComponent } from './components/input/input'; // 👈 Nuevo

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InputComponent], // 👈 Añadido
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'base-card-grupo-b';
}



import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { InputComponent } from './components/input/input';
import { CheckboxComponent } from './components/checkbox/checkbox';
import { ButtonComponent } from './components/button/button'; // ✅ nuevo

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent // ✅ importado correctamente
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'base-card-grupo-b';
}




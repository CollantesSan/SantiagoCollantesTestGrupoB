import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header'; // ✅ Importamos el componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], // ✅ Ahora sí válido
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'base-card-grupo-b';
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // ✅ Esto es clave
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {}


import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Necesario para *ngIf, *ngFor, etc.

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule], // ✅ Importamos las directivas comunes
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class InputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() type: 'text' | 'textarea' | 'select' = 'text';
  @Input() options: string[] = [];
}

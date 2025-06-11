import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css'
})
export class CheckboxComponent {
  @Input() label: string = 'Texto del checkbox';
  @Input() checked: boolean = false;
}

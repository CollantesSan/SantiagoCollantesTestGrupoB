import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { InputComponent } from '../input/input';
import { CheckboxComponent } from '../checkbox/checkbox';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-base-card',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent
  ],
  templateUrl: './base-card.html',
  styleUrl: './base-card.css'
})
export class BaseCardComponent {}


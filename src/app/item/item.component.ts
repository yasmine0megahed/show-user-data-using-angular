import { Component, Input } from '@angular/core';
import { user } from '../models/user';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
@Input() user!: user
}

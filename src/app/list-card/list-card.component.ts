import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss',
})
export class ListCardComponent {
  @Input() cards: Array<any> = [];
}

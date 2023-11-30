import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-special-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './special-slider.component.html',
  styleUrl: './special-slider.component.scss',
})
export class SpecialSliderComponent {
  cards = [
    {
      title: 'Pre-approved offers on Personal Loan',
      text: 'Get instant loan approval and disbursement within 10 minutes.',
      image: '../../assets/images/special-image-1.png',
    },
    {
      title: 'Pre-approved offers on Personal Loan',
      text: 'Get instant loan approval and disbursement within 10 minutes.',
      image: '../../assets/images/special-image-1.png',
    },
    {
      title: 'Pre-approved offers on Personal Loan',
      text: 'Get instant loan approval and disbursement within 10 minutes.',
      image: '../../assets/images/special-image-1.png',
    },
  ];
}

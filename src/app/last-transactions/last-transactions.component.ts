import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-transactions.component.html',
  styleUrl: './last-transactions.component.scss',
})
export class LastTransactionsComponent {
  transactions: any[] = [
    {
      icon: 'fa fa-arrow-up',
      name: 'Lutfullah Ugurer',
      date: '09/10/2023',
      amount: '-$2,303.00',
    },

    {
      icon: 'fa fa-arrow-up',
      name: 'Asimo Saito',
      date: '21/11/2023',
      amount: '-$5,432.21',
    },
    {
      icon: 'fa fa-arrow-up',
      name: 'Ebruli',
      date: '08/12/2023',
      amount: '-$9,768.00',
    },
    {
      icon: 'fa fa-arrow-up',
      name: 'Veripark Software',
      date: '08/12/2023',
      amount: '-$12,332.00',
    },
    {
      icon: 'fa fa-arrow-up',
      name: 'Happy Markt',
      date: '08/12/2023',
      amount: '-$17,161.00',
    },
  ];
}

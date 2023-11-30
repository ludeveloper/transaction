import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SpecialSliderComponent } from './special-slider/special-slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LastTransactionsComponent } from './last-transactions/last-transactions.component';
import { ListCardComponent } from './list-card/list-card.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfile } from './interface/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FontAwesomeModule,
    ProfileComponent,
    SpecialSliderComponent,
    LastTransactionsComponent,
    ListCardComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  profile: UserProfile = {
    name: 'Lutfullah Ugurer',
    image: 'profile-image.png',
  };

  cards: Array<any> = [
    {
      icon: 'fa-regular fa-file-lines',
      name: 'Upcoming Payments',
      number: '4',
      number_class: 'alert',
      view_label: 'View payments',
    },
    {
      icon: 'fa fa-file-contract',
      name: 'Pending Applications',
      number: '2',
      number_class: 'normal',
      view_label: 'View your status',
    },
    {
      icon: 'fa-regular fa-clock',
      name: 'Pending Requests',
      number: '8',
      number_class: 'normal',
      view_label: 'View your status',
    },
    {
      icon: 'fa-regular fa-bell',
      name: 'Alerts',
      number: '5',
      number_class: 'normal',
      view_label: 'View all',
    },
  ];
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../interface/profile.interface';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  @Input() profile: UserProfile = new UserProfile();
}

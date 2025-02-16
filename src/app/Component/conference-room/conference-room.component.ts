import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conference-room',
  imports: [],
  templateUrl: './conference-room.component.html',
  styleUrl: './conference-room.component.css',
})
export class ConferenceRoomComponent {
  constructor(private router: Router) {} // Inject the Router

  redirectToPage(page: string) {
    this.router.navigate([page]);
  }
}

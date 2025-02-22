import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cardiac',
  imports: [],
  templateUrl: './cardiac.component.html',
  styleUrl: './cardiac.component.css',
})
export class CardiacComponent {
  constructor(private router: Router) {} // Inject the Router

  // This function navigates to the route passed as a parameter
  redirectToPage(route: string): void {
    this.router.navigate([route]);
  }
}

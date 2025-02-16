import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ Import this

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  constructor(private router: Router) {}

  onSubmit() {
    // Save flag to indicate form was submitted
    localStorage.setItem('formSubmitted', 'true');

    // Redirect to home page
    this.router.navigate(['welcome-add']);
  }
}

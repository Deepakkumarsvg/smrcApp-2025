import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RequestMapperService } from './services/request-mapper.service';
import { TransmissionService } from './transmission/transmission.service';
import { Route } from '@angular/router';
// import { WelcomeAddComponent } from './Component/welcome-add/welcome-add.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tet';
  public searchForm: FormGroup;

  redirectToExternal(url: string) {
    window.location.href = url;
  }
  isDrawerOpen = false;

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  activeIndex = 0;

  // Called when a nav item is clicked
  setActive(index: number): void {
    this.activeIndex = index;
  }

  constructor(
    private transmit: TransmissionService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      searchQuery: ['']
    });
  }

  public async search(): Promise<void> {
    console.log("clicked me");
    const searchQuery = this.searchForm.get('searchQuery')?.value;
    await this.transmit.executeGetRequestPromise(`${RequestMapperService.FETCH_ACTIVITY_LIST}/${searchQuery}`)
    .then((res: any) => {
      console.log(res);
    })
  }
}

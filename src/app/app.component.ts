import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RequestMapperService } from './services/request-mapper.service';
import { TransmissionService } from './transmission/transmission.service';
import { Route } from '@angular/router';
// import { WelcomeAddComponent } from './Component/welcome-add/welcome-add.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tet';
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

  constructor(private _transmit: TransmissionService) {}

  public async search(): Promise<void> {
    console.log('clicked me');
    await this._transmit
      .executeGetRequestPromise(`${RequestMapperService.API_CALL_CHECK}`)
      .then((res: any) => {
        console.log(res);
      });
  }
}

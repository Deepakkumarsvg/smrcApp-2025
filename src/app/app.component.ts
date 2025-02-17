import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RequestMapperService } from './services/request-mapper.service';
import { TransmissionService } from './transmission/transmission.service';
// import { WelcomeAddComponent } from './Component/welcome-add/welcome-add.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})  
export class AppComponent {
  title = 'tet';

  constructor(
    private _transmit: TransmissionService
  ) {}

  public async search(): Promise<void> {
    console.log("clicked me");
    await this._transmit.executeGetRequestPromise(`${RequestMapperService.API_CALL_CHECK}`)
    .then((res: any) => {
      console.log(res);
    })
  }
}

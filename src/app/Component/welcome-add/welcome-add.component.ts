import { Component } from '@angular/core';
import { TransmissionService } from '../../transmission/transmission.service';
import { RequestMapperService } from '../../services/request-mapper.service';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-welcome-add',
  imports: [],
  templateUrl: './welcome-add.component.html',
  styleUrl: './welcome-add.component.css'
})
export class WelcomeAddComponent {
  private refreshSubscription: Subscription = new Subscription();
  public activeActivities: any[] = [];
  
  constructor(private transmit: TransmissionService) {}

  async ngOnInit(): Promise<void> {
    console.log("hi")
    await this.transmit.executeGetRequestPromise(`${RequestMapperService.FETCH_ACTIVITY_LIST}`)
    .then((res: any) => {
      console.log("res",res);
    })
    await this.fetchActiveActivity();
    
    // 
    this.refreshSubscription = interval(120000).pipe(
      switchMap(() => this.transmit.executeGetRequestPromise(`${RequestMapperService.FETCH_ACTIVITY_LIST}`))
    ).subscribe({
      next: (data) => {
        this.activeActivities = data;
        console.log("Updated Active Activities:", this.activeActivities);
      },
      error: (error) => {
        console.error("Error fetching active activities:", error);
      },
      complete: () => {
        console.log("Active activities update completed.");
      }
    })
  }

  async fetchActiveActivity(): Promise<void> {
    await this.transmit.executeGetRequestPromise(`${RequestMapperService.FETCH_ACTIVITY_LIST}`)
    .then((res: any) => {
        if(res.data) {
          this.activeActivities = res.data;
          console.log("active activity: ",this.activeActivities);
        }
      },
      (error: any) => {
        console.log("Error Fetching active activities: ",error);
      }
    )
  }
}
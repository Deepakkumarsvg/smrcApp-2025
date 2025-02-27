import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransmissionService } from '../../transmission/transmission.service';
import { RequestMapperService } from '../../services/request-mapper.service';
import { interval, Subscription, from, BehaviorSubject  } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-add',
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './welcome-add.component.html',
  styleUrl: './welcome-add.component.css'
})
export class WelcomeAddComponent implements OnInit, OnDestroy {
  // private refreshSubscription: Subscription = new Subscription();
  // public activeActivities: any[] = [];
  activeActivities$ = new BehaviorSubject<any[]>([]); // Holds latest data
  private subscription: any;
  
  constructor(private transmit: TransmissionService) {}

  async ngOnInit(): Promise<void> {
    // await this.fetchActiveActivity();
    // 
    this.subscription = interval(10000).pipe(
      startWith(0),
      switchMap(() => from(this.transmit.executeGetRequestPromise(`${RequestMapperService.FETCH_ACTIVITY_LIST}`)))
    ).subscribe((res: any) => {
      console.log("res.data after 10 secs: ", res.data)
      this.activeActivities$.next(Array.isArray(res.data) ? res.data  : []);
    })
  }

  async fetchActiveActivity(): Promise<void> {
    await this.transmit.executeGetRequestPromise(`${RequestMapperService.FETCH_ACTIVITY_LIST}`)
    .then((res: any) => {
        if(res.data) {
          this.activeActivities$ = res.data;
        }
      },
      (error: any) => {
        console.log("Error Fetching active activities: ",error);
      }
    )
  }

  formatDate(epoch: number): string {
    const date = new Date(epoch);
    return date.toLocaleString('en-US', { weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
      console.log('Unsubscribed from refresh interval');
    }
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();
  constructor() {}

  public show(): void {
    this.loading.next(true);
  }

  public hide(): void {
    this.loading.next(false);
  }
}

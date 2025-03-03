import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestMapperService } from '../../services/request-mapper.service';
import { TransmissionService } from '../../transmission/transmission.service';
import { SpinnerService } from '../../services/spinner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-show',
  imports: [CommonModule],
  templateUrl: './search-show.component.html',
  styleUrl: './search-show.component.css',
})
export class SearchShowComponent implements OnInit {
  public searchResults: any[] = [];
  private routeSub!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transmit: TransmissionService,
    public spinnerService: SpinnerService
  ) {}
  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe((params) => {
      const searchQuery = params['query'];
      if (searchQuery) {
        this.fetchSearchResults(searchQuery);
      }
    });
    console.log(this.searchResults); // Use this data in your component
  }

  private async fetchSearchResults(query: string): Promise<void> {
    this.spinnerService.show();
    // Trasnmit is used for communicating the backend service
    // RequestMapperService.FETCH_ACTIVITY_LIST endpoint
    await this.transmit
      .executeGetRequestPromise(
        `${RequestMapperService.FETCH_ACTIVITY_LIST}/${query}`
      )
      .then((res: any) => {
        if (res && res.data) {
          this.spinnerService.hide();
          this.searchResults = res.data;
        }
      })
      .catch((error: any) => {
        this.spinnerService.hide();
        console.log('No Results Found');
        this.searchResults = [];
      });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.searchResults = [];
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestMapperService } from '../../services/request-mapper.service';
import { TransmissionService } from '../../transmission/transmission.service';

@Component({
  selector: 'app-search-show',
  imports: [],
  templateUrl: './search-show.component.html',
  styleUrl: './search-show.component.css',
})
export class SearchShowComponent implements OnInit {
  public searchResults: any[] = [];
  private routeSub!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transmit: TransmissionService
  ) {
    // const navigation = this.router.getCurrentNavigation();
    // this.searchResults = navigation?.extras.state?.['searchResults'];
  }
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
    console.log(`Fetching data for query: ${query}`);
    await this.transmit
      .executeGetRequestPromise(
        `${RequestMapperService.FETCH_ACTIVITY_LIST}/${query}`
      )
      .then((res: any) => {
        if (res && res.data) {
          this.searchResults = res.data;
        }
      });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.searchResults = [];
  }
}

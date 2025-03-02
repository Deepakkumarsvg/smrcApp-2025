import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-show',
  imports: [],
  templateUrl: './search-show.component.html',
  styleUrl: './search-show.component.css',
})
export class SearchShowComponent implements OnInit {
  public searchResults: any[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.searchResults = navigation?.extras.state?.['searchResults'];
  }
  ngOnInit(): void {
    console.log(this.searchResults); // Use this data in your component
  }

  ngOnDestroy(): void {
    this.searchResults = [];
  }
}

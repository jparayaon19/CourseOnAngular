import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  standalone: false,
  
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent implements OnInit {
listings: Listing[] = [];

constructor() {}

ngOnInit(): void {
  this.listings = fakeMyListings;
  
}

  onDeleteClicked(listingId: string): void{
    alert(`Deleting your listing with id ${listingId}`);
  }
}

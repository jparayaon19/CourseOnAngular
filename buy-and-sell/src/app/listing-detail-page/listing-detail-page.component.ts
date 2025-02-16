import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  standalone: false,
  
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})
export class ListingDetailPageComponent implements OnInit {
  //I was getting an error in here where listing was getting the 
  //property "listing" has no initializer code. Thanks to Hoshiyar
  //Singh Digari on the Q&A section, I learned that the reason it is
  //giving the error is that the listing variable doesn't have a value
  //till runtime. Adding a ? after a variable name tells Angular that 
  // the variable is optional and doesn't need to be defined during compile time. 
  
  listing?: Listing;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id)
  }
}

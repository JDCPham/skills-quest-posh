import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    listings: Array<any> = [];

    constructor(private http: HttpClient) {

        this.http.get('https://9yq5j5ozf5.execute-api.eu-west-1.amazonaws.com/dev/posh').subscribe((response) => {
            this.listings = response as Array<any>;
        })

    }

    ngOnInit(): void {
    }

    star(listing: any): void {
        if (listing.starred) {
            this.http.delete(`https://9yq5j5ozf5.execute-api.eu-west-1.amazonaws.com/dev/posh/star/${listing.id}`).subscribe(() => {
                listing.starred = false;
            })
        } else {
            this.http.patch(`https://9yq5j5ozf5.execute-api.eu-west-1.amazonaws.com/dev/posh/star/${listing.id}`, null).subscribe(() => {
                listing.starred = true;
            })
        }
    }

    formatDate(unformattedDate: string): string {
        const date = new Date(unformattedDate);
        const dateTimeFormat = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          });
          return dateTimeFormat.format(date);
    }

}

import { Input, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

    title: string = '';
    price: string = '';
    location: string = '';
    date: string = '';
    description: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    const body = {
        title: this.title,
        price: this.price,
        location: this.location,
        date: this.date,
        description: this.description,
    };
    console.log(body);
    this.http.post('https://9yq5j5ozf5.execute-api.eu-west-1.amazonaws.com/dev/posh', body).subscribe((response) => {
        console.log(response);
        this.router.navigate(['']);
    })
    console.log('after')
  }

}

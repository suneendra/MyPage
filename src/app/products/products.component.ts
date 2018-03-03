import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  appTitles: any;
  constructor() { }

  ngOnInit() {
    this.appTitles = new Array();
    for(let i = 1; i<=4; i++){
      this.appTitles.push('App Title: '+ i);
    }
  }

}

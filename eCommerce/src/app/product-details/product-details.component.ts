import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/product-interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products:Product[]=products;

  isUnchanged=true;

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(product:Product){

    window.alert(product.name + "Course is Availabe to buy in your location")
  }

  enableBuying(){

    this.isUnchanged=!this.isUnchanged;

  }

}

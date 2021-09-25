import { Injectable } from '@angular/core';
import { Product } from 'src/product-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products:Product[]=[];

  constructor() { }

  addProductstoCart(product: Product){
this.products.push(product)

  }

  getProducts(){
    return this.products;
  }

  clearProducts(){
    this.products=[];
  }
}

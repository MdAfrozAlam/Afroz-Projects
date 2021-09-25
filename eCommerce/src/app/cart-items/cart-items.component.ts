import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product-interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  sum!: number;
  newPrice!: number;
  shippingPrice=8;
  totalPrice:number | undefined;
  quantity:number | undefined;
  value="";

  products=this.cart.getProducts();


  constructor(private cart:CartService) { }

  ngOnInit(): void {
//sub total logic scenario 1
this.updateSum();

}

updateSum(){

  this.sum=0; 
for (let i=0; i<this.products.length; i++){
this.sum=this.sum+ this.products[i].price;

  }
  this.totalPrice=this.sum+this.shippingPrice

}

onkey(product:any,value:any){
  this.newPrice= value * product.price;
  this.sum=this.sum - product.price + this.newPrice;
  this.totalPrice=this.sum+this.shippingPrice;
}

deleteProduct(product: Product){
  const index=this.products.indexOf(product);
  this.products.splice(index,1)

  this.updateSum();
  


}

}

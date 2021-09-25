import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootObject } from 'src/productInterface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prodcut-page',
  templateUrl: './prodcut-page.component.html',
  styleUrls: ['./prodcut-page.component.css']
})
export class ProdcutPageComponent implements OnInit {

  productList!: RootObject;

  constructor(public prodService : ProductService) { }

  ngOnInit(): void {

    this.prodService.getProductList().subscribe((poService:any)=>{
      this.productList=poService;
      console.log(poService);
    },(erroRes:HttpErrorResponse)=>{
      console.log(erroRes);
    
    })
  }
}





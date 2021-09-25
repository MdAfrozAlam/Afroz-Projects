import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  public getProductList():Observable<any>{

    return this.http.get("https://stghybris.lulumea.com/lulucommercewebservices/v2/lulu-ae/products/suggestions?term=camera&max=5&fields=DEFAULT");
  
  }
}

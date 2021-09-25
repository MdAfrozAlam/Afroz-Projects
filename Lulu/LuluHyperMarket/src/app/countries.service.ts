import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(public http:HttpClient) { }
  public getCountries():Observable<any>{
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }
}

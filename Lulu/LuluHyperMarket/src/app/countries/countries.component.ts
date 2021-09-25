import { HttpErrorResponse } from '@angular/common/http';
import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public result:any="";
  constructor(public countyService:CountriesService) { }

  ngOnInit(): void {

    this.countyService.getCountries().subscribe
    ((posRes)=>{
      this.result=posRes;
    },
    (errRes:HttpErrorResponse)=>{
      console.log(errRes);
    })
  }

}

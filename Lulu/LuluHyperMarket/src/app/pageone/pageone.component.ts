import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {

  public var_one:any;
  constructor() {
    this.var_one="Page One!"
   }

  ngOnInit(): void {
  }

}

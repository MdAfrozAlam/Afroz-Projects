import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';


@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit {

  msg:string="gmail.com";

  contact= new Contact;

  submitted:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(form: any){

    this.contact.firstName=form.firstName;
    this.contact.lastName=form.lastName;
    this.contact.email=form.email;
    this.contact.password=form.password;
    console.log(form)

    window.alert("Cart is successfully Submitted by" + this.contact.firstName)
     this.submitted=true;


  }

}

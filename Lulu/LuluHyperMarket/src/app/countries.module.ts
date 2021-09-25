import { CountriesComponent } from './countries/countries.component';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountriesService } from './countries.service';



@NgModule({
    declarations:[CountriesComponent],
    imports:[HttpClientModule,CommonModule,
        RouterModule.forChild([{path:"",component:CountriesComponent}])
    ],
    providers:[CountriesService],
    exports:[CountriesComponent]
})
export class CountriesModule{}

import { PageoneComponent } from './pageone/pageone.component';
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from './auth.guard';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes:Routes=[
{path:"pageone",component:PageoneComponent},
{path:"lazy",loadChildren:()=>import ("./countries.module").
then(obj=>obj.CountriesModule),canLoad:[authGuard]}
]

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}

export const lazyRoutes:ModuleWithProviders=RouterModule.forRoot(appRoutes);
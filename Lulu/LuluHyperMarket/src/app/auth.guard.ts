import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class authGuard{
    canLoad():boolean{
        return confirm("Do you want to enter lazy loaded module??");
    }
}
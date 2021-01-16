import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { ContextStoreService } from "./context-store.service";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private context: ContextStoreService, private router: Router) { }
    
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
        console.log('in Login Guard');
        var isLoggedIn = false;
        var sub = this.context.userAuth
                    .subscribe(
                        (data) => {
                            console.log('Login Guard', data.isLoggedIn);
                            isLoggedIn = !!data.isLoggedIn 
                        }
                    );
        if(isLoggedIn) {
            console.log('Success');
            return true;        
        }
        console.log('Failed');
        this.router.navigate(['/login']);
    }
  }
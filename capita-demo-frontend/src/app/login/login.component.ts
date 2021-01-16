import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ContextStoreService } from "../core/context-store.service";
import { HttpService } from "../core/http.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    password: string;
    userName: string;

    constructor(private httpService: HttpService, private context: ContextStoreService, private router: Router) { }
    login() { 
        // console.log(this.userName + ' ' + this.password);
        this.httpService.post('http://localhost:1010/api/login', { userName: this.userName, password: this.password}).subscribe(
            (data: any) => {
                console.log(data);
                if(data && data.isLoggedIn) {
                    this.context.setLoginStatus(true);
                    this.router.navigate(['/']);
                }
            } 
        )

    }
}
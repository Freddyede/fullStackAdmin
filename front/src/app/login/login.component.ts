import { Component } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
    user: any = {};
    constructor(
        private cookieService: CookieService,
        private router: Router,
        private http: HttpService
    ) { }

    login(e:Event) {
        e.preventDefault();
        this.http.postUri('/login', this.user, null).subscribe(
            (res: any) => {
                this.cookieService.set('Authorization', res.data.token);
                this.cookieService.set('authorizationId', res.data.id);
                this.router.navigate(['admin']);
            }
        );
    }
}

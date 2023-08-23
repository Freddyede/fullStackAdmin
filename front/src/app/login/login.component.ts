import { Component } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { HttpService } from "../http.service";

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
                this.cookieService.set('authorizationToken', res.data.token)
                this.cookieService.set('authorizationId', res.data.id)
                this.router.navigate(['/admin'])
            }
        );
    }
}

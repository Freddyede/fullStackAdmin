import { Component } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.less']
})
export class AdminNavbarComponent {
    constructor(private cookieService: CookieService, private router:Router) {
    }

    logout()
    {
        this.cookieService.deleteAll();
        this.router.navigate(['/logoutUser']);
    }
}

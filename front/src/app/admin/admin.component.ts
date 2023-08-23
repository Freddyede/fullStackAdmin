import {Component, OnInit} from '@angular/core';
import { HttpService } from "../http.service";
import { CookieService } from "ngx-cookie-service";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
    datas: any = [];
    userAuthorization: any = {};
    constructor(readonly http: HttpService, private readonly cookieService: CookieService) { }
    ngOnInit() {
        this.userAuthorization = {
            token: this.cookieService.get('authorizationToken')
        };
        this.http.postUri('/admin', {
            id: this.cookieService.get('authorizationId')
        }, this.userAuthorization).subscribe(
            (res: any) => res.datas.map((elmnt: any) => this.datas.push(elmnt))
        );
    }
}

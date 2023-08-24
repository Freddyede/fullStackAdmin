import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit{
    user: any = {};
    constructor(
        private readonly http: HttpService,
        private roads: Router
    ) { }
    ngOnInit() { }

    submit(e: Event) {
        e.preventDefault();
        this.http.postUri('/register', this.user).subscribe(
            (res: any) => res && this.roads.navigate(['/login'])
        )
    }

}

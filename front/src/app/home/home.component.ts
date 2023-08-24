import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
    title: string|null = "HomeComponent";
    constructor(public route: ActivatedRoute) {
        localStorage.setItem('title', "HomeComponent");
        this.title = localStorage.getItem('title');
        this.route.paramMap.subscribe(() => {
            // here you need to call the method which you are setting up
            this.title = localStorage.getItem('title');
        });
    }
}

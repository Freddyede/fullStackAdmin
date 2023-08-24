/**
 * Modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
/**
    Components
 */
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
/**
    Services
 */
import { CookieService } from "ngx-cookie-service";
import { NavbarComponent } from './navbar/navbar.component';
import {AdminComponent} from "./admin/admin.component";
import {FindComponentComponent} from "./find-component/find-component.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        FindComponentComponent,
        RegisterComponent,
        LoginComponent,
        NavbarComponent,
        SidebarComponent,
        AdminNavbarComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }

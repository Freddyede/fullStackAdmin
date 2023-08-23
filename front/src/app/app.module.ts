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
import { AdminComponent } from './admin/admin.component';
import {NgOptimizedImage} from "@angular/common";
import { FindComponentComponent } from './find-component/find-component.component';

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      AdminComponent,
      FindComponentComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }

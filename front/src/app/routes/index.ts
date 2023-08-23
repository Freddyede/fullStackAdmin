import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { authGuard } from "../auth.guard";
import { AdminComponent } from "../admin/admin.component";
import {FindComponentComponent} from "../find-component/find-component.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        canActivate: [authGuard],
        component: AdminComponent,
        children: [
            {
                path: ':id',
                component: FindComponentComponent
            }
        ]
    }
];

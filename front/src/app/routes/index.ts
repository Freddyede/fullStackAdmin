import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import {authGuard} from "../auth.guard";
import {FindComponentComponent} from "../find-component/find-component.component";
import {AdminComponent} from "../admin/admin.component";
import {DashboardComponent} from "../dashboard/dashboard.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path:'admin',
        component: DashboardComponent
    },
    {
        path: 'admin/platforms',
        canActivate: [authGuard],
        component: AdminComponent,
        pathMatch: 'full'
    },
    {
        path: 'admin/platforms/:id',
        canActivate: [authGuard],
        component: FindComponentComponent,
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch: 'full'
    }
];

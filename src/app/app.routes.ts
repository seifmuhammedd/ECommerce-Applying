import { Routes } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';

export const routes: Routes = [
    {path:"", redirectTo:"user", pathMatch: 'full'},
    {path:"auth", component: AuthLayoutComponent, children:[
        {path:"", redirectTo:"login", pathMatch: 'full'},
        {path: "login", component: LoginComponent, title: "LogIn"},
        {path: "register", component: RegisterComponent, title: "Register"},
    ]},
    {path: "user", component: UserLayoutComponent, children:[
        {path:"", redirectTo:"user-home", pathMatch: 'full'},
        {path:"user-home", component: HomeUserComponent, title: "Home"},
        {path:"cart", component: CartComponent, title: "Cart"},
        {path:"shop", component: ShopComponent, title: "Shop"},
    ]},
    {path: "admin", component: AdminLayoutComponent, children:[
        {path:"", redirectTo:"admin-home", pathMatch: 'full'},
        {path:"admin-home", component:HomeAdminComponent, title: "Home"}
    ]},
    {path: "**", component: NotFoundComponent, title: "Error 404"}
];

import { Component } from '@angular/core';
import { AdminNavComponent } from '../../components/admin-nav/admin-nav.component';
import { UserNavComponent } from '../../components/user-nav/user-nav.component';
import { CartComponent } from "../../components/cart/cart.component";
import { HomeUserComponent } from "../../components/home-user/home-user.component";
import { ShopComponent } from "../../components/shop/shop.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [UserNavComponent, CartComponent, HomeUserComponent, ShopComponent, RouterOutlet],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}

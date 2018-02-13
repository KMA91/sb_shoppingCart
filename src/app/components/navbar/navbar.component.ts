import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private cartQty: number = 0;
  private subscription: Subscription;
  display: string = "none";

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.cartNotify.subscribe(success =>
      this.getCart()
    )
  }

  getCart(){
    this.cartQty = this.cartService.getNavCartCount()
  }

  toggleModal(){
    this.cartService.toggleModal("toggleModal");
  }

}

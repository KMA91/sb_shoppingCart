import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public cartQty: number = 0;
  public subscription: Subscription;
  public display: string = "none";

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.cartNotify.subscribe(success =>
      this.getCart()
    )
  }

  // get cart count to show on nav

  getCart() : any {
    this.cartQty = this.cartService.getNavCartCount()
  }

  // toggle nav

  toggleModal() : any {
    this.cartService.toggleModal("toggleModal");
  }

}

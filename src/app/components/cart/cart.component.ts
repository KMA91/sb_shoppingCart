import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { takeUntil } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private counter: number = 0;
  private cart = [];
  private display: string = "block";

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart()
    this.cartService.modalNotify.subscribe(success =>
      this.toggleModal()
    )
    this.cartService.cartNotify.subscribe(success =>
      this.getCart()
    )
  }

  toggleModal(){
    if (this.display == "none") {
      this.display="block";
    } else {
      this.display="none"
    }
  }

  getCart(){
    this.cart = this.cartService.getCart();
  }

  removeItem(product){
    this.cartService.removeProductCart(product);
    this.getCart();
  }

}

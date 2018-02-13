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

  public counter: number = 0;
  public cart = [];
  public display: string = "block";
  public total: number;

  // Used to temporarily bypass deployment error

  public showTotal: Boolean = false;

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
    this.showTotal = true;
  }

  toggleModal() : void {
    if (this.display == "none") {
      this.display="block";
    } else {
      this.display="none"
    }
  }

  getCart() : any {
    this.cart = this.cartService.getCart();
  }

  removeItem(product) : any {
    this.cartService.removeProductCart(product);
    this.getCart();
  }

}

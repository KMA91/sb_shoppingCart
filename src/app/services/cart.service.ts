import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {

  private cart = [];
  private cartMessage = new BehaviorSubject<string>("I will fire everytime an item is added to the cart!")
  public cartNotify = this.cartMessage.asObservable();
  private modalMessage = new BehaviorSubject<string>("I will fire everytime for toggling modal display")
  public modalNotify = this.modalMessage.asObservable();

  constructor() { }

  // Add item

  addProductCart(product) : any {
    this.cart.push(product);
    this.updateCartCount();
  }

  // Remove item

  removeProductCart(product) : any {
    this.cart.splice(product, 1);
    this.updateCartCount();
  }

  // Get items and total price

  getCart() : any {
    this.cart['total'] = 0;
    this.cart.forEach( product => {
      this.cart['total'] += product.price;
    })
    return this.cart;
  }

  // Get counter

  getNavCartCount() : any {
    return this.cart.length;
  }

  // Observables used to notify components of changes

  updateCartCount() : void {
    this.cartMessage.next("making changes to the cart!");
  }

  toggleModal(message) :void {
    this.modalMessage.next(message);
  }

}

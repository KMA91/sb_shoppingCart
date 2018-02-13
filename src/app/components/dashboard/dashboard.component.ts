import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private products: any;

  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  // GET PRODUCTS FROM JSON FILE

  getProducts(){
    this.dataService.getProducts()
    .subscribe(
      products => {
        this.products = products['products']
        for( let product of this.products ){
          product.price = product.price*0.01
        }
      }
    )
  }

  // ADD PRODUCTS TO CART

  addProductCart(product) : any {
    this.cartService.addProductCart(product);
  }
}

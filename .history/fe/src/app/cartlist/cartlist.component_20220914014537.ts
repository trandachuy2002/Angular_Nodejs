import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Product } from '../product';
@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css'],
})
export class CartlistComponent implements OnInit {
  cartProducts: Product[] = [];
  totalQuantity: number;
  price: number;
  totalPrice: number;

  constructor(private _productsService: DuLieuService) {}

  ngOnInit() {
    this._productsService.event.subscribe((product) => {
      alert('cart-list-ngOnInit');
      let index = -1;
      index = this.cartProducts.findIndex((p) => p.id_sp === product.id_sp);
      if (index != -1) {
        this.cartProducts[index].quatity += 1;
      } else if (index === -1) {
        this.cartProducts.push(product);
      }
      // this.sum();
    });
  }

  // deleteProduct(id) {
  //   let index = this.cartProducts.findIndex((item) => item.product_id === id);
  //   this.cartProducts.splice(index, 1);
  //   this.sum();
  // }

  // sum(): void {
  //   this.totalQuantity = 0;
  //   this.price = 0;
  //   this.totalPrice = 0;
  //   if (this.cartProducts) {
  //     this.cartProducts.map((product) => {
  //       this.totalQuantity += product.product_quanity;
  //       this.price += product.product_price;
  //       this.totalPrice += product.product_price * product.product_quanity;
  //     });
  //     // for (let i = 0; i < this.cartProducts.length; i++) {
  //     //   this.totalQuantity += this.cartProducts[i].product_quanity;
  //     //   this.price += this.cartProducts[i].product_price;
  //     //   this.totalPrice +=
  //     //     this.cartProducts[i].product_price * this.cartProducts[i].product_quanity;
  //     // }
  //   }
  // }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from './product.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  placehoder: any = [];
  cartItems = new BehaviorSubject([]);
  constructor() {
    const ls = JSON.parse(localStorage.getItem('cart'));
    if (ls) this.cartItems.next(ls);
  }
  addItem(product: Product) {
    const ls = JSON.parse(localStorage.getItem('cart'));
    let exist: Product;
    if (ls) exist =ls.
    const exist: any = this.cartItems.find((item: any) => {
      return item.id_sp === product.id_sp;
    });
    if (exist) exist.qty++;
    else this.cartItems.push(product);

    this.placehoder.next(this.cartItems);
    console.log(this.cartItems);
  }
}

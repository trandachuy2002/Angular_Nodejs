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
    const ls = localStorage;.get
  }
  addItem(product: Product) {
    const exist: any = this.cartItems.find((item: any) => {
      return item.id_sp === product.id_sp;
    });
    if (exist) exist.qty++;
    else this.cartItems.push(product);

    this.placehoder.next(this.cartItems);
    console.log(this.cartItems);
  }
}

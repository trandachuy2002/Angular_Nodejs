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
    console.log(typeof localStorage.getItem('cart'));

    const ls: any = JSON.parse(String(localStorage.getItem('cart')));
    if (ls) this.cartItems.next(ls);
  }
  addItem(product: Product) {
    const ls = JSON.parse(String(localStorage.getItem('cart')));
    let exist: any;
    if (ls)
      exist = ls.find((item: any) => {
        return item.id_sp === product.id_sp;
      });

    if (exist) {
      exist.qty++;
      localStorage.setItem('cart', JSON.stringify(ls));
    } else {
      if (ls) {
        const newData = [...ls, product];
        localStorage.setItem('cart', JSON.stringify(newData));
        // this.cartItems.next(JSON.parse(String(localStorage.getItem('cart')));
      }
    }
  }
}

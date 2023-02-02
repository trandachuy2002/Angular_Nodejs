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
    if (ls)
      exist = ls.find((item: any) => {
        return item.id_sp === product.id_sp;
      });

    if (exist) {
      exist.qty++;
      localStorage.setItem('cart', JSON.stringify(ls));
    } else 
    
  }
}

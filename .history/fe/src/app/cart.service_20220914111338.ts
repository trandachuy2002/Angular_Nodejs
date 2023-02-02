import { Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = [];
  constructor() {}
  addItem(product: Product) {
    const exist = this.cartItems.find((item: any) => {
      return item.id_sp === product.id_sp;
    });
    if (exist) exist.qty;
    else this.cartItems.push(product);
    console.log(cartItems);
  }
}

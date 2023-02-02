import { Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = [];
  constructor() {}
  addItem(product: Product) {
    const exist = this.cartItems.find((item) => {
      return item.id_sp === product.id_sp;
    });
  }
}

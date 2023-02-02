import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];
  numofItem = new BehaviorSubject();
  constructor() {}
  addItem(product: Product) {
    const exist: any = this.cartItems.find((item: any) => {
      return item.id_sp === product.id_sp;
    });
    if (exist) exist.qty++;
    else this.cartItems.push(product);
    console.log(this.cartItems);
  }
}

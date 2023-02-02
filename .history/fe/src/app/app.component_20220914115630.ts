import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fe';
  itemInCart: number;
  constructor(
    private _productsService: DuLieuService,
    private cartSsevi: CartService
  ) {}

  ngOnInit() {
    this.cartSsevi.numofItem.subscribe((data) => {
      this.itemInCart = data.length;
      console.log(data);
    });
  }
}

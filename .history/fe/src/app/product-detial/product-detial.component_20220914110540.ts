import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detial',
  templateUrl: './product-detial.component.html',
  styleUrls: ['./product-detial.component.css'],
})
export class ProductDetialComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private spone: DuLieuService,
    private cart
  ) {}
  listSp: Product[] = [];

  idSp: number = Number(this.route.snapshot.params['id']);
  sp = <Product>{};
  ngOnInit(): void {
    // this.listSP = this.spService.getSanPham();
    // if (this.idTa < 0) return;

    // let kq = this.nvService.getMotTask(this.idTa);
    // if (kq == null) {
    //   this.ta = {} as Task;
    // } else {
    //   this.ta = kq as Task;
    // }
    if (this.idSp < 0) return;
    this.spone.getOnesp(this.idSp).subscribe((data) => {
      this.sp = data as Product;
    });
  }
  addToCart(sp: Product) {}
}

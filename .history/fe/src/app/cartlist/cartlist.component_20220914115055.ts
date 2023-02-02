import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Product } from '../product';
@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css'],
})
export class CartlistComponent implements OnInit {
  constructor(private _productsService: DuLieuService) {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

import {Product} from "./product.model";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  findText = new FormControl();

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.fetchProducts();

      this.findText.valueChanges
          .debounceTime(500)
          .subscribe(value => {
             this.fetchProducts(value);
          });
  }

  fetchProducts(findText?: string) {
      this.productService.query(findText)
          .subscribe(products => this.products = products);
  }


  addProduct(product: Product) {
      this.productService.add(product)
          .subscribe(r => {
              this.fetchProducts();
          });
  }





}

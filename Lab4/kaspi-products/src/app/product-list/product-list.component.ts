import {Component, inject, OnInit} from '@angular/core';
import { Product } from '../product';
import {ProductComponent} from '../product/product.component';
import {NgForOf} from '@angular/common';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [
    ProductComponent,
    NgForOf
  ],
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.filteredProducts$.subscribe(products => {
      this.products = products;
    });
  }
}

import { Injectable } from '@angular/core';
import {Product} from './product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  private filteredProducts = new BehaviorSubject<Product[]>(this.products);
  filteredProducts$ = this.filteredProducts.asObservable();

  url = 'http://localhost:3000/products';

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async saveProduct(product: Product) {
    await fetch(`${this.url}/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(json => console.log(json));
  }

  filterByCategory(categoryId: number) {
    this.getAllProducts().then(products => {
      const filtered = products.filter(p => p.categoryId === categoryId);
      this.filteredProducts.next(filtered);
    });
  }

  removeProduct(productId: number) {
    this.getAllProducts().then(products => {
      this.products = products.filter(p => p.id !== productId);
      this.filteredProducts.next(this.filteredProducts.getValue().filter(p => p.id !== productId));
    });
  }
}

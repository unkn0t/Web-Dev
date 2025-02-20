import {Component, inject} from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, CategoryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kaspi-product-list';

  private productService = inject(ProductService);

  onCategoryChange(categoryId: number) {
    this.productService.filterByCategory(categoryId);
  }
}

import {Component, inject, Input} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;

  private productService = inject(ProductService);

  shareProduct() {
    let shareUrl = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`;
    window.open(shareUrl, '_blank');
  }

  async likeProduct() {
    if (this.product.likes === 0) {
      this.product.likes += 1;
      await this.productService.saveProduct(this.product);
    }
  }

  removeProduct() {
    this.productService.removeProduct(this.product.id);
  }
}

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
  likeCount = 0;

  private productService = inject(ProductService);

  shareProduct() {
    let shareUrl = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`;
    window.open(shareUrl, '_blank');
  }

  likeProduct() {
    this.likeCount += 1;
  }

  removeProduct() {
    this.productService.removeProduct(this.product.id);
  }
}

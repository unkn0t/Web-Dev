import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kaspi-products';
}

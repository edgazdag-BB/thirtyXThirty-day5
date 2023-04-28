import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() product!: Product;
  @Input() productCategories!: string[];
  @Output() productUpdated: EventEmitter<Product> = new EventEmitter<Product>();
}

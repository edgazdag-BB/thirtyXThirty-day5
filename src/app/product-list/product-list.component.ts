import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() productList!: Product[];
  @Input() displayedColumns!: string[];
  @Output() addProduct = new EventEmitter();
  @Output() editProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() deleteProduct: EventEmitter<number> = new EventEmitter<number>();
}

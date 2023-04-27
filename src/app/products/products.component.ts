import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  idCounter: number = 5;
  productList: Product[] = [
    { id: 1, productName: "Milk", quantity: 3, price: 4.99, category: "Food/Drink" },
    { id: 2, productName: "Shampoo", quantity: 12, price: 2.98, category: "Personal Care"},
    { id: 3, productName: "Tooth Paste", quantity: 2, price: 1.5, category: "Personal Care"},
    { id: 4, productName: "Grass Seed", quantity: 6, price: 8.96, category: "Lawn & Garden" },
    { id: 5, productName: "Doritos", quantity: 9, price: 4.39, category: "Food/Drink" },
  ];

  displayedColumns: string[] = ['id', 'name', 'category', 'quantity', 'price', 'delete'];
  productCategories: string[] = ['Personal Care', 'Food/Drink', 'Lawn & Garden'];

  currentProduct: Product;

  constructor() {
    this.currentProduct = this.productList[0];
  }

  addProduct() {
    this.idCounter++;
    this.productList = [...this.productList,
      { id: this.idCounter,
        productName: '',
        quantity: 0,
        price: 0,
        category: '',
      },
    ];
  }

  updateProduct(product: Product) {
    this.currentProduct = {...product};
  }

  updateProductDetails(product: Product) {
    this.currentProduct = {...product};
    this.productList = this.productList.map((p) =>
      p.id === product.id ? { ...product } : p
    );
  }

  deleteProduct(id: number) {
    this.productList = this.productList.filter((p) => p.id !== id);
    this.currentProduct = this.productList[0];
  }
}

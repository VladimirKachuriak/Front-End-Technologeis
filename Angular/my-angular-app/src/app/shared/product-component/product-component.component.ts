import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServiceComponent } from '../product-service/product-service.component';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {
  products!: Observable<any[]>;

  constructor(private productService: ProductServiceComponent) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}

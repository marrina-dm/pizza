import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.less'
})
export class ProductsComponent implements OnInit {
  public products: ProductType[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();

    this.productService.getProducts()
      .subscribe({
          next: (data) => {
            this.products = data;
          },
            error: error => {
            console.log(error);
            //this.router.navigate(['/']).then();
        }
      });
  }

  // public addToCart(title: string): void {
  //   this.cartService.product-card = title;
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}}).then();
  // }
}

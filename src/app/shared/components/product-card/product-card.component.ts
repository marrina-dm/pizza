import {
  Component,
  Input
} from '@angular/core';
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.less'
})
export class ProductCardComponent {
  @Input()
  get product(): ProductType {
    return this._product;
  }
  set product(param: ProductType) {
    this._product = param;
  }
  private _product: ProductType = {} as ProductType;
}

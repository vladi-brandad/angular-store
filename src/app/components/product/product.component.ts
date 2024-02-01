import { Component, Input } from '@angular/core';
import { IProduct } from '../../../models/i_product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  // title = 'Product title';
  showDetails = false;
  @Input() product: IProduct;
}

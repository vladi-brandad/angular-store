import { Component } from '@angular/core';
import { IProduct } from '../models/i_product';
import { products as data } from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'product shop';
  products: IProduct[] = data;
}

import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product_detail.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent }, 
  { path: 'product/:id', component: ProductDetailComponent } 
];

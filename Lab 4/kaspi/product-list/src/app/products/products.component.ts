import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input ()products: Product[] = [];
  
  shareOnWhatsApp(phone: string='+77756553005', link: string='Hello'): void {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent('Посмотрите: ' + link)}`, '_blank');
  }
  
  shareOnTelegram(usernameOrGroup: string = 'odinelit', link: string='Hello'): void {
    window.open(
      `https://t.me/${usernameOrGroup}?text=${encodeURIComponent('Посмотрите: ' + link)}`,
      '_blank'
    );
  }
  
  
  
  
}
import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-list';


  products: Product[] = [
    {
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb серебристый',
      id:1,
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета',
      imageUrls: ['assets/sixth.jpeg'],
      rating: 4.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      id:2,
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      imageUrls: ['assets/second.jpeg'],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      id:3,
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. ',
      imageUrls: ['assets/third.jpeg'],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      id:4,
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      imageUrls: ['assets/fourth.jpeg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 13 128Gb синий',
      id:5,
      description: 'Apple разработали совершенно новую схему расположения камер и развернули объективы',
      imageUrls: ['assets/fiftth.jpeg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 13 128Gb белый',
      id:6,
      description: 'Новая сверхширокоугольная камера видит больше деталей в темных областях снимка.',
      imageUrls: ['assets/sixth.jpeg'],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 16 Pro 128Gb серебристый',
      id:7,
      description: ' Это флагманская модель линейки iPhone которая подчеркивает ваши неограниченные возможности.',
      imageUrls: ['assets/fiftth.jpeg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 15 128Gb голубой',
      id:8,
      description: 'Смартфон получил динамический остров, на который выводятся уведомления.',
      imageUrls: ['assets/tenth.jpeg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 15 Pro 128Gb серый',
      id:9,
      description: 'Титановый корпус стал одновременно и прочнее, и легче корпуса из стали.',
      imageUrls: ['assets/ninth.jpeg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 16 Pro 128Gb белый',
      id:10,
      description: 'Это флагманская модель линейки iPhone которая подчеркивает ваши неограниченные возможности.',
      imageUrls: ['assets/tenth.jpeg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-belyi-123888540/?c=750000000'
    },

  ];
}

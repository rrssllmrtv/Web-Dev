import { Component } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Product } from "../model/product.model";
import { ProductsComponent } from "../products/products.component";


@Component({
    selector:'app-product-detail',
    standalone:true,
    imports:[CommonModule,RouterModule],
    templateUrl:'./products-detail.component.html',
    styleUrls:['./products-detail.component.css']

})
export class ProductDetailComponent {
    product: Product | undefined;

    constructor(private route: ActivatedRoute, private productsComponent: ProductsComponent) {}
    ngOnInit() {
      const productId = Number(this.route.snapshot.paramMap.get("id"));
      this.product = this.productsComponent.products.find((p) => p.id === productId);

    }
  }

  
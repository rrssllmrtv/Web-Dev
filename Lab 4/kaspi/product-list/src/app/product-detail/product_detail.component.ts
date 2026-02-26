import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Product } from "../model/product.model";

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product_detail.component.html",
  styleUrls: ["./product_detail.component.css"],
})
export class ProductDetailComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get("id"));
    const products: Product[] = history.state.products || []; 

    this.product = products.find((p) => p.id === productId);
  }
}

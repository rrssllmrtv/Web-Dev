import { NumberSymbol } from "@angular/common";

export interface Product{
  name:string;
  id:number;
  description:string;
  imageUrls:string[];
  rating:number;
  link:string;
}
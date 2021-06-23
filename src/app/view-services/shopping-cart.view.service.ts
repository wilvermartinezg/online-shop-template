import { Injectable } from '@angular/core';
import { ProductModel, ShoppingCartModel } from '../models/product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ShoppingCartViewService {
  private readonly tmpProducts: ShoppingCartModel[] = [];
  private readonly quantityProductsSubject = new Subject<number>();
  private readonly productsSubject = new BehaviorSubject<ShoppingCartModel[]>([]);

  quantityProducts = this.quantityProductsSubject.asObservable();
  products = this.productsSubject.asObservable();

  constructor() {
  }

  addProduct(theProduct: ProductModel, theQuantity = 1): void {
    const item: ShoppingCartModel = {
      product: theProduct,
      price: theProduct.unitPrice,
      quantity: theQuantity,
      total: theProduct.unitPrice
    };

    this.tmpProducts.push(item);
    this.productsSubject.next(this.tmpProducts);
    this.quantityProductsSubject.next(this.tmpProducts.length);
  }
}

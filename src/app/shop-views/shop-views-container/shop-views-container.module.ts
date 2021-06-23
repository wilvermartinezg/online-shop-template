import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopViewsContainerComponent } from './shop-views-container.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopToolbarModule } from '../../components/shop-toolbar/shop-toolbar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MainLayoutModule } from '../../components/main-layout/main-layout.module';
import { HttpServicesModule } from '../../http-services/http-services.module';

const routes: Routes = [
  {
    path: '',
    component: ShopViewsContainerComponent,
    children: [
      // {
      //   path: 'category/:categoryId',
      //   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      // },
      // {
      //   path: 'shopping-cart',
      //   loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
      // }
    ]
  }
];

@NgModule({
  declarations: [ShopViewsContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShopToolbarModule,
    MainLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpServicesModule
  ]
})
export class ShopViewsContainerModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const lazyRoutes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./shop-views-container/shop-views-container.module').then(m => m.ShopViewsContainerModule),
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(lazyRoutes)
  ]
})
export class ShopViewsModule {
}

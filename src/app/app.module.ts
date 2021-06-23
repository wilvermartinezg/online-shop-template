import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ViewsModule } from './views/views.module';
import { ShopViewsModule } from './shop-views/shop-views.module';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'login'
    // redirectTo: 'store/category/0'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ViewsModule,
    ShopViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

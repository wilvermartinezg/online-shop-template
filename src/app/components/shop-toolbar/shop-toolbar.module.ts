import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopToolbarComponent } from './shop-toolbar.component';
import { ShopToolbarService } from './shop-toolbar.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { ViewServicesModule } from '../../view-services/view-services.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ShopToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatBadgeModule,
    ViewServicesModule
  ],
  exports: [ShopToolbarComponent],
  providers: [ShopToolbarService]
})
export class ShopToolbarModule {
}

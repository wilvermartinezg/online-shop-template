import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent, MainLayoutContentDirective, MainLayoutToolbarDirective } from './main-layout.component';
import { PortalModule } from '@angular/cdk/portal';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MainLayoutComponent, MainLayoutContentDirective, MainLayoutToolbarDirective],
  imports: [
    CommonModule,
    PortalModule,
    FlexLayoutModule
  ],
  exports: [MainLayoutComponent, MainLayoutContentDirective, MainLayoutToolbarDirective]
})
export class MainLayoutModule {
}

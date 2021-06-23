import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const lazyRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(lazyRoutes)
  ]
})
export class ViewsModule {
}

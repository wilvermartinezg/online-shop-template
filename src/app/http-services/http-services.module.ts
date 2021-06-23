import { NgModule } from '@angular/core';
import { CategoryHttpService } from './category.http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [CategoryHttpService]
})
export class HttpServicesModule {
}

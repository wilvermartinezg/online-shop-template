import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ShopToolbarService {
  readonly searchInputSubject = new Subject<string>();
  readonly searchInput = this.searchInputSubject.asObservable();
}

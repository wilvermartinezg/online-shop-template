import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ShopToolbarService } from './shop-toolbar.service';
import { takeUntil } from 'rxjs/operators';
import { ShoppingCartViewService } from '../../view-services/shopping-cart.view.service';

@Component({
  selector: 'app-shop-toolbar',
  templateUrl: './shop-toolbar.component.html',
  styleUrls: ['./shop-toolbar.component.scss']
})
export class ShopToolbarComponent implements OnInit {

  private unsubscribeAll = new Subject<boolean>();

  @Input()
  showProfileMenu = false;

  @Input()
  showLoginButton = false;

  searchInput = '';
  photoURL = 'assets/images/avatars/profile.jpg';
  userName = 'Wilver Martinez';
  haveAccessToBackOffice = false;
  quantityProductsInShoppingCart = 0;

  constructor(
    private router: Router,
    private shoppingCartViewService: ShoppingCartViewService,
    private shopToolbarService: ShopToolbarService
  ) {
  }

  goToShoppingCart(): void {
    this.router.navigate(['/store/shopping-cart']);
  }

  goToLogin(): void {
    // 1. Redireccionamos al login
    this.router.navigate(['/login']);
  }

  buscar(): void {
    this.shopToolbarService.searchInputSubject.next(this.searchInput);
  }

  goToBackOffice(): void {
    this.router.navigate(['/back-office']);
  }

  logout(): void {
    // 1. Borramos el token localmente
    // this.authenticationService.logout();
    // TODO implement logout here
  }

  ngOnInit(): void {
    this.shoppingCartViewService
      .quantityProducts
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(quantity => {
        this.quantityProductsInShoppingCart = quantity;
      });
  }

}

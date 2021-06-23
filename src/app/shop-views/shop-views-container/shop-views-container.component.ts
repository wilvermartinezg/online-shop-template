import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { CategoryModel } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryHttpService } from '../../http-services/category.http.service';

@Component({
  selector: 'app-shop-views-container',
  templateUrl: './shop-views-container.component.html',
  styleUrls: ['./shop-views-container.component.scss']
})
export class ShopViewsContainerComponent implements OnInit, OnDestroy {

  private unsubscribeAll = new Subject<boolean>();

  @ViewChild('mainMatDrawer', { static: false })
  mainMatDrawer: MatDrawer;

  isLogged = false;
  categoryList: CategoryModel[] = [];
  currentCategoryId = 0;

  constructor(
    private categoryService: CategoryHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.categoryService
      .getAll()
      .then(data => {
        this.categoryList = data;
      })
      .catch(err => {
        console.error('Error al obtener las categorias', err);
      });
  }

  goToCategory(categoryId: number): void {
    this.currentCategoryId = categoryId;
    this.router.navigate(['store/category', categoryId]);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(true);
    this.unsubscribeAll.complete();
  }

}

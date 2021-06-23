import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from '../models/product';

@Injectable()
export class CategoryHttpService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getAll(): Promise<CategoryModel[]> {
    return new Promise(resolve => {
      const categories: CategoryModel[] = [
        {
          id: 1,
          active: true,
          categoryName: 'Audio',
          createdAt: '2021-06-22T20:07:00',
          createdBy: 'Anonimo',
          modifiedAt: null,
          modifiedBy: null
        },
        {
          id: 2,
          active: true,
          categoryName: 'Teclados',
          createdAt: '2021-06-22T20:07:00',
          createdBy: 'Anonimo',
          modifiedAt: null,
          modifiedBy: null
        }
      ];

      resolve(categories);

    });
  }

}

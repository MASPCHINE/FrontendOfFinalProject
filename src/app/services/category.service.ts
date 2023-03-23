import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'https://localhost:7094/api/categories/getall';

  constructor(private htppClient: HttpClient) {}

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.htppClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}

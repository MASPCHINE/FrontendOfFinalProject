import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:7094/api/products/getall';

  constructor(private htppClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    return this.htppClient.get<ProductResponseModel>(this.apiUrl)
  }
}

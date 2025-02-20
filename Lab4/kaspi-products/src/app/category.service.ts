import { Injectable } from '@angular/core';
import {Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategories(): Category[] {
    return [
      { id: 0, name: 'Computers' },
      { id: 1, name: 'Furniture' },
      { id: 2, name: 'Phones and gadgets' },
      { id: 3, name: 'Household appliances' },
    ]
  }
}

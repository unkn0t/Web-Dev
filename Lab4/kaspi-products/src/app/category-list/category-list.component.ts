import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {Category} from '../category';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-list',
  imports: [],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  private categoryService = inject(CategoryService);
  selectedCategoryId = 0;

  @Output() categorySelected = new EventEmitter<number>();

  constructor() {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit() {
    this.selectCategory(this.selectedCategoryId);
  }

  selectCategory(categoryId: number) {
    this.categorySelected.emit(categoryId);
    this.selectedCategoryId = categoryId;
  }
}

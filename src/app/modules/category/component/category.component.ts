import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectCategory } from '../store/selectors/category.selectors';
import { getCategory } from '../store/actions/category.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  categories$ = this.store.pipe(select(selectCategory))
  selectedCategory: string | undefined;

  ngOnInit(): void {
    this.store.dispatch(getCategory());
    
  }

  navigateToSerieA(): void {
    if(this.selectedCategory){
      this.router.navigate(['/serie-a'], { queryParams: { category: this.selectedCategory } })
    }
  }

}

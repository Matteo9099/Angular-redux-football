import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectCategory } from '../store/selectors/category.selectors';
import { getCategory } from '../store/actions/category.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private store: Store) { }

  categories$ = this.store.pipe(select(selectCategory))

  ngOnInit(): void {
    this.store.dispatch(getCategory());
    
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './component/category.component';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './store/reducers/category.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './store/effects/category.effects';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    StoreModule.forFeature("mycategories", categoryReducer),
    EffectsModule.forFeature([CategoryEffects])
  ]
})
export class CategoryModule { }

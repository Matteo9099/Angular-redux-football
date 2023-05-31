import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieAComponent } from './modules/serieA/components/serie-a.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/category/category.module').then(b => b.CategoryModule)
  },
  {
    path: 'serie-a',
    component: SerieAComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

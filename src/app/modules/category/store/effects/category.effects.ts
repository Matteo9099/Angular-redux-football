import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CategoryService } from "src/app/@core/services/category.service";
import { getCategory, getCategorySuccess } from "../actions/category.actions";
import { map, switchMap } from "rxjs";

@Injectable()
export class CategoryEffects {
    constructor(private actions$: Actions,
        private categoryService: CategoryService) {}

    getCategories$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getCategory),
            switchMap(() => 
                this.categoryService.getAllCategories().pipe(
                    map((data: any) => getCategorySuccess({ categoriesResp: data }))
                )
            )
        )
    })

    // getCategories$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(getCategory),
    //         switchMap(() => {
    //             return this.categoryService.getAllCategories().pipe(
    //                 map((data) => getCategorySuccess({ categoriesResp: data }))
    //             )
    //         })
    //     )
    // )

}


import { createAction, props } from "@ngrx/store";
import { Category } from "src/app/@shared/interfaces/category";

// invoke request api to get all categories
export const getCategory = createAction("[Category] get start")
// categories API success
export const getCategorySuccess = createAction("[Category] get Success", props<{ categoriesResp: Category[] }>())
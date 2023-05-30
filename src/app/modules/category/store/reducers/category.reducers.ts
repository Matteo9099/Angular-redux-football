import { createReducer, on } from "@ngrx/store";
import { Category } from "src/app/@shared/interfaces/category";
import { getCategorySuccess } from "../actions/category.actions";

export const initialState: ReadonlyArray<Category> = [];

export const categoryReducer = createReducer(
    initialState,
    on(getCategorySuccess, (state, {categoriesResp}) => {
        return categoriesResp;
    })
)
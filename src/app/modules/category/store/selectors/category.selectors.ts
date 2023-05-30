import { createFeatureSelector } from "@ngrx/store";
import { Category } from "src/app/@shared/interfaces/category";

export const selectCategory = createFeatureSelector<Category[]>("mycategories")
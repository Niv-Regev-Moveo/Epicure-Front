import { Reducer } from "@reduxjs/toolkit";
import { IChef } from "../chunk/collections/chefs/chefs.types";
import { IRestaurant } from "../chunk/collections/restaurants/restaurants.types";
import { IDish } from "../chunk/collections/dishes/dishes.types";
import { IChefOfTheWeek } from "../chunk/collections/chefOfTheWeek/chefOfTheWeek.types";
import { ISearchResults } from "../chunk/collections/search/search.types";

export interface RootState {
  chefState: Reducer<IChef>;
  restaurantState: Reducer<IRestaurant>;
  dishState: Reducer<IDish>;
  chefOfTheWeekState: Reducer<IChefOfTheWeek>;
  searchState: Reducer<ISearchResults>;
}

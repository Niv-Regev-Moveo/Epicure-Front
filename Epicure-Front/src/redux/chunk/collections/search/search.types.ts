import { IChef } from "../chefs/chefs.types";
import { IDish } from "../dishes/dishes.types";
import { IRestaurant } from "../restaurants/restaurants.types";

export interface ISearchResults {
  chefs?: IChef[];
  restaurants?: IRestaurant[];
  dishes?: IDish[];
}

export interface SearchState {
  results: ISearchResults | null;
  loading: boolean;
  error: string | null;
}

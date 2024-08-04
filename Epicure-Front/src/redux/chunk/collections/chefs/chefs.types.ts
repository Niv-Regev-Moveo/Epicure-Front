import { IRestaurant } from "../restaurants/restaurants.types";

export interface IChef {
  _id: string;
  name: string;
  image: string;
  description: string;
  chefOfTheWeek: boolean;
  restaurants: IRestaurant[];
  status: string;
}

export interface ChefState {
  chefs: IChef[];
  loading: boolean;
  error: string | null;
}

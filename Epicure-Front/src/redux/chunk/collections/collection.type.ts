import { IChefOfTheWeek } from "./chefOfTheWeek/chefOfTheWeek.types";
import { IChef } from "./chefs/chefs.types";
import { IDish } from "./dishes/dishes.types";
import { IRestaurant } from "./restaurants/restaurants.types";

export type Collection = "chefs" | "restaurants" | "dishes" | "chefOfTheWeek";

export type CollectionType = IChef | IRestaurant | IDish | IChefOfTheWeek;

export interface ChefSlice<T> {
  data: T[] | null;
  httpErr: string | undefined;
}

import { IRestaurant } from "../restaurants/restaurants.types";

export interface IChefOfTheWeek {
  restaurants: IRestaurant[];
  _id: string;
  name: string;
  image: string;
  description: string;
}

export interface ChefOfTheWeekState {
  chefOfTheWeek: IChefOfTheWeek | null;
  loading: boolean;
  error: string | null;
}

export interface ChefOfTheWeekSectionProps {
  image?: string;
  name?: string;
  description?: string;
}

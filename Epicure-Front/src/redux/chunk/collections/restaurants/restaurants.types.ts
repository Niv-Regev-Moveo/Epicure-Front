import { IChef } from "../chefs/chefs.types";
import { IDish } from "../dishes/dishes.types";

export interface IRestaurant {
  _id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  chef: IChef;
  dishes: IDish[];
  status: string;
}

export interface RestaurantState {
  restaurants: IRestaurant[];
  loading: boolean;
  error: string | null;
}

export interface CardRestaurantProps extends JSX.IntrinsicAttributes {
  chefName: string;
  rating: number;
}

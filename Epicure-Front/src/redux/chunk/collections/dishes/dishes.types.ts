import { EIconMeaning } from "../../../../components/enum/iconMeaning.enum";
import { IRestaurant } from "../restaurants/restaurants.types";

export interface IDish {
  _id: string;
  name: string;
  image: string;
  description: string;
  type: string | null;
  price: number;
  tags: string[];
  ingredients: string[];
  restaurant: IRestaurant;
  status: string;
  signatureDish: boolean;
}

export interface DishState {
  dishes: IDish[];
  signatureDishes: IDish[];
  loading: boolean;
  error: string | null;
}

export interface CardDishProps extends JSX.IntrinsicAttributes {
  ingredients: string[];
  price: number;
  icon: EIconMeaning;
}

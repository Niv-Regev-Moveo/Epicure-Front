import { combineReducers } from "@reduxjs/toolkit";
import { chefsReducer } from "../chunk/collections/chefs/chefs.slice";
import { restaurantsReducer } from "../chunk/collections/restaurants/restaurants.slice";
import { dishesReducer } from "../chunk/collections/dishes/dishes.slice";
import { chefOfTheWeekReducer } from "../chunk/collections/chefOfTheWeek/chefOfTheWeek.slice";
// Import other reducers as needed

const rootReducer = combineReducers({
  chefState: chefsReducer,
  restaurantState: restaurantsReducer,
  dishState: dishesReducer,
  chefOfTheWeekState: chefOfTheWeekReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import { configureStore } from "@reduxjs/toolkit";
import { chefsReducer } from "../chunk/collections/chefs/chefs.slice";
import { restaurantsReducer } from "../chunk/collections/restaurants/restaurants.slice";
import { dishesReducer } from "../chunk/collections/dishes/dishes.slice";
import { chefOfTheWeekReducer } from "../chunk/collections/chefOfTheWeek/chefOfTheWeek.slice";
import { searchReducer } from "../chunk/collections/search/search.slice";

const store = configureStore({
  reducer: {
    chefsState: chefsReducer,
    restaurantsState: restaurantsReducer,
    dishesState: dishesReducer,
    chefOfTheWeekState: chefOfTheWeekReducer,
    searchState: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

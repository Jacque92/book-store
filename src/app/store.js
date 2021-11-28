//import Reducers
import { searchBarReducer } from "./features/searchBar/searchBarSlice";
import { shoppingCartReducer } from "./features/shoppingCart/shoppingCartSlice";
import { bookListsReducer } from "./features/booklists/booklistsSlice";
import { logInReducer } from "./features/authorization/authorizationSlice";
import { categoryListsReducer } from "./features/categoryList/categoryListSlice";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  cart: shoppingCartReducer,
  search: searchBarReducer,
  bookLists: bookListsReducer,
  categoryLists: categoryListsReducer,
  logIn: logInReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

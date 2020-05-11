import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer, { rescueSessionAction } from "./userDuck";
import { getEmployeesAction } from "./employeesDuck";
import { getCategoriesAction } from "./categoriesDuck";
import thunk from "redux-thunk";
import employeesReducer from "./employeesDuck";
import categoriesReducer from "./categoriesDuck";

let rootReducer = combineReducers({
  user: userReducer,
  employees: employeesReducer,
  categories: categoriesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStore = () => {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  getEmployeesAction()(store.dispatch, store.getState);
  getCategoriesAction()(store.dispatch, store.getState);
  rescueSessionAction()(store.dispatch);

  return store;
};

export default generateStore;

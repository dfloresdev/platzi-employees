import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "./userDuck";
import { getEmployeesAction } from "./employeesDuck";
import thunk from "redux-thunk";
import employeesReducer from "./employeesDuck";

let rootReducer = combineReducers({
  user: userReducer,
  employees: employeesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStore = () => {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  getEmployeesAction()(store.dispatch, store.getState);

  return store;
};

export default generateStore;

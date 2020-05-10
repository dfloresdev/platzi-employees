import API from "../APIS/apis";
import { getCategoriesAction } from "./categoriesDuck";

const URL = API.crudEmployees;
const ENDPOINT = "/employees";

const GET_EMPLOYEES = "GET_EMPLOYEES";
const GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS";
const GET_EMPLOYEES_ERROR = "GET_EMPLOYEES_ERROR";

const DELETE_EMPLOYEES = "DELETE_EMPLOYEES";
const DELETE_EMPLOYEES_SUCCESS = "DELETE_EMPLOYEES_SUCCESS";
const DELETE_EMPLOYEES_ERROR = "DELETE_EMPLOYEES_ERROR";

const MODAL_SUCCESS = "MODAL_SUCCESS";

const initialDataEmployees = {
  fetching: false,
  data: [],
};

const reducer = (state = initialDataEmployees, actions) => {
  switch (actions.type) {
    case GET_EMPLOYEES:
      return { ...state, fetching: true };
    case GET_EMPLOYEES_SUCCESS:
      return { ...state, fetching: false, data: actions.payload };
    case GET_EMPLOYEES_ERROR:
      return { ...state, fetching: false, error: actions.payload };
    case DELETE_EMPLOYEES:
      return { ...state, deleting: true };
    case DELETE_EMPLOYEES_SUCCESS:
      return { ...state, deleting: false, deleted: actions.payload };
    case DELETE_EMPLOYEES_ERROR:
      return { ...state, deleting: false, error: actions.payload };
    case MODAL_SUCCESS:
      return { ...state, deleted: actions.payload };
    default:
      return state;
  }
};

export const getEmployeesAction = () => (dispatch, getState) => {
  dispatch({
    type: GET_EMPLOYEES,
  });

  return fetch(URL + ENDPOINT)
    .then((response) => {
      // debugger;
      if (response.ok) {
        return response.json();
      } else {
        throw response;
      }
    })
    .then((res) => {
      dispatch({
        type: GET_EMPLOYEES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_EMPLOYEES_ERROR,
        payload: error.status,
      });
    });
};

export const deleteEmployeesAction = (uid) => (dispatch, getState) => {
  dispatch({
    type: DELETE_EMPLOYEES,
  });

  return fetch(URL + ENDPOINT + "/" + uid, { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response;
      }
    })
    .then((res) => {
      dispatch(getCategoriesAction());
      dispatch(getEmployeesAction());
      dispatch({
        type: DELETE_EMPLOYEES_SUCCESS,
        payload: true,
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_EMPLOYEES_ERROR,
        payload: error.status,
      });
    });
};

export const changeStatusModalSuccessAction = () => (dispatch, getState) => {
  dispatch({
    type: MODAL_SUCCESS,
    payload: !getState().employees.deleted,
  });
};

export default reducer;

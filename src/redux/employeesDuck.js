import API from "../APIS/apis";

const URL = API.crudEmployees;
const ENDPOINT = "employees";

const GET_EMPLOYEES = "GET_EMPLOYEES";
const GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS";
const GET_EMPLOYEES_ERROR = "GET_EMPLOYEES_ERROR";

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

export default reducer;

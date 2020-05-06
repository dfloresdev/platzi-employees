import API from "../APIS/apis";

const URL = API.crudEmployees;
const ENDPOINT = "/employees";

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
      break;
    case GET_EMPLOYEES_SUCCESS:
      return { ...state, data: actions.payload };
      break;
    case GET_EMPLOYEES_ERROR:
      return { ...state, error: actions.payload };
      break;
    default:
      return state;
      break;
  }
};

export const getEmployeesAction = () => (dispatch, getState) => {
  return fetch(URL + ENDPOINT)
    .then((response) => response.json())
    .then((res) => {
      dispatch({
        type: GET_EMPLOYEES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_EMPLOYEES_ERROR,
        payload: error,
      });
    });
};

export default reducer;

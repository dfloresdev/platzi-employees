import API from "../APIS/apis";

const ENDPOINT = "/employees/categories";
const URL = API.crudEmployees;

const GET_CATEGORIES = "GET_CATEGORIES";
const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
const GET_CATEGORIES_ERROR = "GET_CATEGORIES_ERROR";

const initialDataCategories = {
  fetching: false,
  data: [],
};

const reducer = (state = initialDataCategories, actions) => {
  switch (actions.type) {
    case GET_CATEGORIES:
      return { ...state, fetching: true };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, fetching: false, data: actions.payload };
    case GET_CATEGORIES_ERROR:
      return { ...state, fetching: false, error: actions.payload };
    default:
      return { ...state };
  }
};

export const getCategoriesAction = () => (dispatch, getState) => {
  dispatch({
    type: GET_CATEGORIES,
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
        type: GET_CATEGORIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_CATEGORIES_ERROR,
        payload: error.status,
      });
    });
};

export default reducer;

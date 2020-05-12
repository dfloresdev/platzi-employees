import { loginWithGoogle, logOutGoogle } from "./login";

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const LOG_OUT = "LOG_OUT";

let initialState = {
  loggedIn: false,
  fetching: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, fetching: true };
    case LOGIN_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, fetching: false, ...action.payload, loggedIn: true };
    case LOG_OUT:
      return { ...initialState };
    default:
      return state;
  }
}

export const rescueSessionAction = () => (dispatch, getState) => {
  let storage = JSON.parse(localStorage.getItem("storage"));
  if (storage && storage.user) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: storage.user,
    });
  }
};

export const googleLoginAction = () => (dispatch, getState) => {
  dispatch({
    type: LOGIN,
  });

  return loginWithGoogle()
    .then((user) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          photoUrl: user.photoURL,
        },
      });
      saveStorage(getState());
    })
    .catch((e) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: e.message,
      });
    });
};

export const logOutAction = () => (dispatch, getState) => {
  logOutGoogle();
  dispatch({
    type: LOG_OUT,
  });
  localStorage.removeItem("storage");
};

function saveStorage(storage) {
  localStorage.storage = JSON.stringify(storage);
}

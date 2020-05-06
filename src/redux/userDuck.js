const LOGIN = "LOGIN";

let initialState = {
  loggedIn: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:

    default:
      return state;
  }
}

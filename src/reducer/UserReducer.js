import * as actionType from "./../actions/types";

const initState = {
  loading: true,
  user: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload.user,
        loading: false
      };
    case actionType.USER_SIGN_OUT:
      return {
        loading: false
      };
    case actionType.USER_LOADING:
      return {
        loading: true
      };
    default:
      return state;
  }
};

export default userReducer;

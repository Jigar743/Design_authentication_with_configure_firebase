import {
  EMAIL_ERROR,
  EMAIL_VERIFICATION_MESSAGE,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  PASSWORD_ERROR,
  SIGNUP_FAILURE,
  USER_INFO,
} from "./Auth/auth";

const initialState = {
  isAuthenticated: false,
  isSignUp: false,
  isLoggedIn: false,
  login_err: "",
  signup_err: "",
  currentuser: {},
  emailErr: "",
  passwordErr: "",
  email_verification_msg: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_VERIFICATION_MESSAGE:
      return {
        ...state,
        email_verification_msg: action.message,
      };
    case EMAIL_ERROR:
      return {
        ...state,
        emailErr: action.message,
      };
    case PASSWORD_ERROR:
      return {
        ...state,
        passwordErr: action.message,
      };
    case USER_INFO:
      return {
        ...state,
        currentuser: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login_err: action.message,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isAuthenticated: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup_err: action.message,
      };
    default:
      break;
  }
  return state;
};

export default reducer;

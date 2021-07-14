import { auth } from "../../Firebase/Firebase";

export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const EMAIL_ERROR = "EMAIL_ERROR";
export const PASSWORD_ERROR = "PASSWORD_ERROR";

export const EMAIL_VERIFICATION_MESSAGE = "EMAIL_VERIFICATION_MESSAGE";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const USER_INFO = "USER_INFO";

export const fetchUserData = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    let username = auth.currentUser.email.split("@")[0];
    let emailVerified = auth.currentUser.emailVerified;
    let user_fullname = auth.currentUser.displayName;
    let userdata = { username, emailVerified, user_fullname };
    dispatch({
      type: USER_INFO,
      user: userdata,
    });
  });
};

export const SignupUser = (name, mobileno, email, password) => (dispatch) => {
  try {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((usercredential) => {
        usercredential.user
          .sendEmailVerification()
          .then(() => {
            dispatch({
              type: EMAIL_VERIFICATION_MESSAGE,
              message:
                "We Are sent you a verification Email, please Verify your email!",
            });
          })
          .catch((err) => {
            dispatch({
              type: EMAIL_VERIFICATION_MESSAGE,
              message: err,
            });
          });
        auth.onAuthStateChanged((user) => {
          user.updateProfile({
            displayName: name,
          });
        });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            dispatch({
              type: EMAIL_ERROR,
              message: err.message,
            });
            break;
          case "auth/weak-password":
            dispatch({
              type: PASSWORD_ERROR,
              message: err.message,
            });
            break;
          default:
            break;
        }
      });
  } catch (err) {
    dispatch({
      type: SIGNUP_FAILURE,
      message:
        "Something went wrong, we couldn't create your account. please try again !",
    });
  }
};

export const LoginUser = (email, password) => (dispatch) => {
  try {
    auth.signInWithEmailAndPassword(email, password).then((user) => {
      user.user.getIdToken(true).then((idToken) => {
        localStorage.setItem("user_id_token", idToken);
      });
      dispatch({
        type: LOGIN_SUCCESS,
      });
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      message: err,
    });
  }
};

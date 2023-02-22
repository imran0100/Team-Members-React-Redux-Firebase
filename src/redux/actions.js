import * as types from "./actionTypes";
import { auth, googleAuthProvider } from "../firebase";

const registerStart = () => {
  return {
    type: types.REGISTER_START,
  };
};

const registerSuccess = (user) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload: user,
  };
};

const registerFail = (error) => {
  return {
    type: types.REGISTER_FAIL,
    payload: error,
  };
};

const loginStart = () => {
  return {
    type: types.LOGIN_START,
  };
};

const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};

const loginFail = (error) => {
  return {
    type: types.LOGIN_FAIL,
    payload: error,
  };
};

const logoutStart = () => {
  return {
    type: types.LOGOUT_START,
  };
};

const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};

const logoutFail = (error) => {
  return {
    type: types.LOGOUT_FAIL,
    payload: error,
  };
};

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};

//google auth
const googleSignInStart = () => {
  return {
    type: types.GOOGLE_SIGN_IN_START,
  };
};

const googleSignInSuccess = (user) => {
  return {
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
  };
};

const googleSignInFail = (error) => {
  return {
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error,
  };
};

export const registerInitiate = (name, email, password) => {
  return (dispatch) => {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        // user.updateProfile({ name });
        // console.log(user, "Sign Up Firebase");
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });
  };
};

export const loginInitiate = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user, "Sign In Firebase");
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        dispatch(loginFail(error.message));
      });
  };
};

export const logoutInitiate = () => {
  return (dispatch) => {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((res) => {
        console.log(res, "LogOut response");
        dispatch(logoutSuccess());
      })
      .catch((error) => {
        dispatch(logoutFail(error.message));
      });
  };
};

export const googleSignInInitiate = () => {
  return (dispatch) => {
    dispatch(googleSignInStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then((user) => {
        console.log(user, "Sign In Google Firebase");
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => {
        dispatch(googleSignInFail(error.message));
      });
  };
};

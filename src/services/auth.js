import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerStart,
  registerFailed,
  registerSuccess,
} from "../redux/authSlice";
import config from "../configAxios";

export const apiRegister = async (
  { name, password, phone },
  dispatch,
  navigate
) => {
  var data = await JSON.stringify({
    phone: phone,
    name: name,
    password: password,
  });
  dispatch(registerStart());
  try {
    const responsive = await config({
      method: "post",
      url: "/api/v1/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    if (responsive.data.err === 0) {
      dispatch(registerSuccess(responsive.data));
      navigate("/login");
      localStorage.setItem(
        "token",
        JSON.stringify({ isLogin: true, token: responsive.data.token })
      );
    } else {
      dispatch(registerFailed(responsive.data));
    }
  } catch (error) {
    dispatch(loginFailed());
  }
};
export const apiLogin = async ({ password, phone }, dispatch, navigate) => {
  var data = await JSON.stringify({
    phone: phone,
    password: password,
  });
  dispatch(loginStart());
  try {
    const responsive = await config({
      method: "post",
      url: "/api/v1/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    if (responsive.data.err === 0) {
      dispatch(loginSuccess(responsive.data));
      navigate("/");
      localStorage.setItem(
        "token",
        JSON.stringify({ isLogin: true, token: responsive.data.token })
      );
    } else {
      dispatch(loginFailed(responsive.data));
    }
  } catch (error) {
    dispatch(loginFailed());
  }
};

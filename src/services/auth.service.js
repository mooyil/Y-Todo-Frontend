import axios from "axios";

const API_URL = "http://localhost:5200/auth";

const signup = (username, password) => {
  return axios
    .post(API_URL + "/signup", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.accessToken));
        localStorage.setItem("userName", JSON.stringify(response.data.userName));
      }

      return response.data;
    });
};

const signin = (username, password) => {
  return axios
    .post(API_URL + "/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.accessToken));
        localStorage.setItem("userName", JSON.stringify(response.data.userName));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userName");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  signin,
  logout,
  getCurrentUser,
};

export default authService;
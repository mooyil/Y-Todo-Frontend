import axios from "axios";

const API_URL = "http://localhost:5200/auth";

const signup = (email, password) => {
  return axios
    .post(API_URL + "/signup", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.accessToken));
        localStorage.setItem("userEmail", JSON.stringify(response.data.userEmail));
      }

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.accessToken));
        localStorage.setItem("userEmail", JSON.stringify(response.data.userEmail));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userEmail");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
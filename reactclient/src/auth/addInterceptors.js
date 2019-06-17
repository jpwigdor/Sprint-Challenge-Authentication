import axios from "axios";

// Interceptors Example
// import this into any file that runs axios, run it above your other component imports

axios.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem("jwt");
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

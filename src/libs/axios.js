import Axios from "axios";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const requestInterceptor = async (config) => {
  let token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.set("Authorization", `${token}`);
  } else {
    console.error("You can't access the api without valid token");
  }

  return config;
};
axios.interceptors.request.use(requestInterceptor);

import axios from 'axios';
import router from '../router/index.js';

axios.defaults.baseURL = import.meta.env.VITE_API + '/api';
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.data.message === "Invalid or expired token") {
      localStorage.removeItem("token");
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

export default axios;

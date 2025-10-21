import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-dynamic-code-2iet.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

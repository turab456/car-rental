import axios from "axios";

const api = axios.create({
  baseURL: "https://cabbajar-backend.kanlifegroup.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

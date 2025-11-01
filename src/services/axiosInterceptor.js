// lib/axiosInstance.ts
import axios from "axios";
import Cookies from "js-cookie"; // works in browser only

const axiosInstance = axios.create({
  baseURL: "https://backend-dynamic-code-2iet.onrender.com" || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  async (config) => {
    // Read token from cookies (client-side)
    if (typeof window !== "undefined") {
      const token = Cookies.get("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error("[API Request Error]", error);
    return Promise.reject(error);
  }
);

// ✅ RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized - maybe token expired?");
      if (typeof window !== "undefined") {
        Cookies.remove("access_token");
        window.location.href = "/login";
      }
    }

    console.error("[API Response Error]", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;

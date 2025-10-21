import api from "../../services/api";
import { AUTH_ENDPOINTS } from "../../constants/endpoints";

export const registerUser = async (userData) => {
  const response = await api.post(AUTH_ENDPOINTS.REGISTER, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await api.post(AUTH_ENDPOINTS.LOGIN, credentials);
  return response.data;
};

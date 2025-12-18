import axiosInstance from "../../../../services/axiosInterceptor";

export const fetchMyLeads = (params = {}) => {
  return axiosInstance.get("/lead/myLead", { params });
};


export async function getSingleAccount(accountId) {
  const resp = await axiosInstance.get(`/account/getSingleAccount/${accountId}`);
  return resp.data; // caller will access .data
}
// frontend/src/api/axios.js
import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // Base URL of your backend server
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: method,
    url: url,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};

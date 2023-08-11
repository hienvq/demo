import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3005",
});
axiosClient.interceptors.response.use((response) => {
  if (response.status === 200) return response.data;
  return response;
});
export default axiosClient;

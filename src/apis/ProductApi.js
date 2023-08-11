import axiosClient from "./Api";

const getAll = (config) => {
  return axiosClient.get("/products", config);
};
const getById = (id, config) => {
  return axiosClient.get(`/products/${id}`, config);
};
const create = (data, config) => {
  return axiosClient.post("/products", data, config);
};
const update = (id, data, config) => {
  return axiosClient.put(`/products/${id}`, data, config);
};
const remove = (id, config) => {
  return axiosClient.delete(`/products/${id}`, config);
};
const ProductApi = { getAll, create, update, remove, getById };
export default ProductApi;

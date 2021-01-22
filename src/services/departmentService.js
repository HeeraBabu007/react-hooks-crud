import http from "../http-common";

const getAll = () => {
  return http.get("/department");
};

const get = id => {
  return http.get(`/department/${id}`);
};

const create = data => {
  return http.post("/department", data);
};

const update = (id, data) => {
  return http.put(`/department/${id}`, data);
};

const remove = id => {
  return http.delete(`/department/${id}`);
};

const removeAll = () => {
  return http.delete(`/department`);
};

const findByTitle = title => {
  return http.get(`/department?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
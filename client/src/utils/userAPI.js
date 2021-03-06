import axios from "axios";

export default {
  register: function (user) {
    return axios.post("/api/register", user);
  },
  login: function (user) {
    return axios.post("/api/login", user);
  },
  isAuthorized: function () {
    return axios.get("/api/authorized");
  },
  logout: function () {
    return axios.get("/api/logout");
  },
  availableUN: function (username) {
    return axios.get("/api/user/?username=" + username);
  },
  viewTrainers: function () {
    return axios.get("/api/trainers")
  },
  addTrainer: function (email) {
    return axios.put("/api/create/trainer/" + email)
  },
  deleteTrainer: function (id) {
    return axios.put("/api/delete/trainer/" + id)
  }
};

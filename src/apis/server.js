import axios from "axios";

const axiosInstances = axios.create({
  baseURL: "http://localhost:8080/",
});

export default axiosInstances;

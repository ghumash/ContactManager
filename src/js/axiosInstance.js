import axios from "axios";

const instance = axios.create({
  baseURL: "https://637f4b1e2f8f56e28e86f2b5.mockapi.io/",
})

export default instance;
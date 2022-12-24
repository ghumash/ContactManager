import axios from "axios";

const instance = axios.create({
  baseURL: "https://contact-manager-492a3-default-rtdb.europe-west1.firebasedatabase.app/",
})

export default instance;
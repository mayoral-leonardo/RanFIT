import axios from "axios";

const api = axios.create({
  baseURL:'https://ranfitapi-production.up.railway.app/api'
});

export default api;
import axios from "axios";

const url = "https://url-shorter-dwct.onrender.com/";
// const url = "http://localhost:4000/";

let baseUrl = axios.create({
  baseURL: url,
});

export default baseUrl;

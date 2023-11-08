import axios from "axios";

// URL for deployed cloudfunction
const instance = axios.create({
  baseURL: 
    "..." // The API (cloud function) URL
});

export default instance;

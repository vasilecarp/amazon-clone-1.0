import axios from "axios";

// URL for deployed cloudfunction
const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-6764a/us-central1/api", // The API (cloud function) URL
});

export default instance;

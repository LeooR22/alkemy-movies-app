import axios from "axios";

const baseURL = "http://challenge-react.alkemy.org";

const alkemyApi = axios.create({ baseURL });

// alkemyApi.interceptors.request.use();

export default alkemyApi;

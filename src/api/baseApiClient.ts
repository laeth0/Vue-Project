import axios from "axios";
import { AxiosInstance } from "axios";

const baseApiClient: AxiosInstance = axios.create({
    baseURL: "https://ecommerce-node4.onrender.com",
});

export default baseApiClient;

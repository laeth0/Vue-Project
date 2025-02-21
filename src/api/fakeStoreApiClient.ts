import axios from "axios";
import { AxiosInstance } from "axios";

const fakeStoreApiClient: AxiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
});

export default fakeStoreApiClient;

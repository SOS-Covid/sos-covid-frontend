/* eslint-disable */
import { axiosInstance } from "..";

export const auth = (data) => axiosInstance.post("/test", data);

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ibn-aroub-server.vercel.app/api/v1",
});

const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;

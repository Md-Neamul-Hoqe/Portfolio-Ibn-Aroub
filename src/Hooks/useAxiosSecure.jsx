import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  // baseURL: "https://ibn-aroub-server.vercel.app/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;

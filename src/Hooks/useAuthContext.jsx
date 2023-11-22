import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;

import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = new createContext(null);

const AuthProvider = ({ children }) => {
  // console.log(children);
  
  const maxWidth = "max-w-screen-xl mx-auto";

  const authInfo = {
    maxWidth,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

import axios from "axios";
import React, { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const handleLoginUser = (user) => {
    axios
      .get(
        `http://localhost:5000/login?email=${user.email}&password=${user.password}`
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      });
  };
  const handleRegisterUser = (body) => {
    axios
      .post(`http://localhost:5000/register`, body)
      .then((res) => {
        //console.log(res)
        //console.log(JSON.parse(res.config.data))
        const data = JSON.parse(res.config.data);
        //console.log(data)
        if (data) {
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const authInfo = {
    user,
    setUser,
    handleRegisterUser,
    handleLoginUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

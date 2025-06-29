import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const API_KEY = "et4dZOAoHASe1IUb5F3AjWenAmZ9AY5j";
  const API_SECRET = "dqJwpL2Cqnsampuy";

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getToken = async (clientId, clientSecret) => {
    try {
      const res = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email: data.email,
        password: data.password,
      });

      if (res.status === 200) {
        const result = await getToken(API_KEY, API_SECRET);
        const userData = {
          ...data,
          token: result.data.access_token,
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/profile");
      } else {
        return res.data.message;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

import React, { createContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";

export const AppContext = createContext(null);

const Adapter = (props) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //signup

  const handleSignUp = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: `${data.firstName} ${data.lastName}`,
        });
        navigate("/login");
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        Swal.fire(`Signup Failed`);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
      }
    });
  }, []);

  //login
  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Login successful",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((err) => {
        setError(err.message);
        Swal.fire(`Login Failed`);
      });
  };

  //logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  //img generator

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      setWeatherData(response.data);
    }
    fetchData();
  }, [city]);

  return (
    <AppContext.Provider
      value={{
        user,
        data,
        setData,
        handleSignUp,
        error,
        handleLogin,
        loginData,
        setLoginData,
        handleLogout,
        setCity,
        weatherData,
      }}
    >
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home user={user} /> : <Login />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default Adapter;

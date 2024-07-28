import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/firebase";
import { useEffect, useState } from "react";
import SignupEmail from "./components/Authentication/SignupEmail";
import SigninEmail from "./components/Authentication/SigninEmail";
import Login from "./components/Authentication/Login";
import SignupForm from "./components/Authentication/SignupForm";
import Myfavourites from "./components/MyFavourites";
import Navbar from "./components/Navbar";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("You are logged in", user);
        setUser(user);
      } else {
        console.log("You are logged out", user);
        setUser(null);
      }
    });
  }, []);

  const renderRoutes = () => {
    if (user === null) {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/SignupEmail" element={<SignupEmail />} />
          <Route path="/SigninEmail" element={<SigninEmail />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path="/myFavourites" element={<Myfavourites />} />
          <Route path="/" element={<Home user={user} />} />
          <Route path="/product/:id" element={<ProductDetail user={user} />} />
          {/* <Route path="/SigninEmail" element={<SigninEmail />} /> */}


          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      );
    }
  };

  return (
    <>
      {user !== null && <Navbar user={user} />}
      {renderRoutes()}
    </>
  );
}

export default App;

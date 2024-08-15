import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/firebase";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Myfavourites from "./pages/MyFavourites";
import SignupForm from "./pages/Authentication/SignupForm";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Login from "./pages/Authentication/Login";
import "react-toastify/dist/ReactToastify.css";
import EditProfile from "./pages/EditProfile";
import SigninEmail from "./pages/Authentication/SigninEmail";
import SignupEmail from "./pages/Authentication/SignupEmail";

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
          <Route path="/SigninEmail" element={<SigninEmail />} />
          <Route path="/SignupEmail" element={<SignupEmail />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      );
    } else {
      return (
        <>
          <Routes>
            <Route path="/myFavourites" element={<Myfavourites />} />
            <Route path="/" element={<Home user={user} />} />
            <Route
              path="/product/:id"
              element={<ProductDetail user={user} />}
            />
            <Route
              path="/myFavourites"
              element={
                <Myfavourites />
              }
            />
            <Route path="/editProfile/info" element = {<EditProfile user = {user} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
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

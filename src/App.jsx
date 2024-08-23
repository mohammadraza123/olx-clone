import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LoginLayout from "./pages/Authentication/LoginLayout";
import SignupLayout from "./pages/Authentication/SignupLayout";
import SigninForm from "./pages/Authentication/SigninForm";
import SignupForm from "./pages/Authentication/SignupForm";
import Myfavourites from "./pages/MyFavourites";
import ProductDetail from "./pages/ProductDetail";
import EditProfile from "./pages/EditProfile";
import CategoryPage from "./pages/CategoryPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/firebase";
import "react-toastify/dist/ReactToastify.css";

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
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/signup" element={<SignupLayout />} />
          <Route path="/SigninEmail" element={<SigninForm />} />
          <Route path="/SignupEmail" element={<SignupForm />} />
          <Route path="/category/:id" element={<CategoryPage />} />
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
            <Route path="/myFavourites" element={<Myfavourites />} />
            <Route
              path="/editProfile/info"
              element={<EditProfile user={user} />}
            />
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

import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginLayout from "./pages/Authentication/LoginLayout";
import SignupLayout from "./pages/Authentication/SignupLayout";
import SigninForm from "./pages/Authentication/SigninForm";
import SignupForm from "./pages/Authentication/SignupForm";
import Myfavourites from "./pages/MyFavourites";
import ProductDetail from "./pages/ProductDetail";
import EditProfile from "./pages/EditProfile";
import CategoryPage from "./pages/CategoryPage";
import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/firebase";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoutes";

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

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/signup" element={<SignupLayout />} />
        <Route path="/SigninEmail" element={<SigninForm />} />
        <Route path="/SignupEmail" element={<SignupForm />} />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute user={user}>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/:id"
          element={
            <ProtectedRoute user={user}>
              <CategoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myFavourites"
          element={
            <ProtectedRoute user={user}>
              <Myfavourites />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/:id"
          element={
            <ProtectedRoute user={user}>
              <CategoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editProfile/info"
          element={
            <ProtectedRoute user={user}>
              <EditProfile user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

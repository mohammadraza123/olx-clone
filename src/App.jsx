import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginLayout from "./pages/Authentication/LoginLayout";
import SignupLayout from "./pages/Authentication/SignupLayout";
import SigninForm from "./pages/Authentication/SigninForm";
import SignupForm from "./pages/Authentication/SignupForm";
import MyFavourites from "./pages/MyFavourites";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("You are logged in", user);
        setUser(user);
      } else {
        console.log("You are logged out", user);
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/signup" element={<SignupLayout />} />
        <Route path="/SigninEmail" element={<SigninForm />} />
        <Route path="/SignupEmail" element={<SignupForm />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/myFavourites" element={<MyFavourites />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/editProfile/info" element={<EditProfile />} />
          <Route path="/category/:id" element={<CategoryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

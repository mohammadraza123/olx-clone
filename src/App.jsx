import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/signup";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/signup" element={<Signup/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;

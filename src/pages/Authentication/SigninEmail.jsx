import React, { useState } from "react";
import { app } from "../../firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const auth = getAuth(app);

const SigninEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully Login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-semibold mb-6 text-center">Sign In</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500 w-full sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500 w-full sm:text-sm"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SigninEmail;

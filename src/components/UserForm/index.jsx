import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";

const UserForm = ({ heading, showFields, signupLogic }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signupLogic) {
      // Signup Logic
      if (!name) {
        toast.error("Enter your Name");
        return;
      } 
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const userId = userCredential.user.uid;

        // Add data in the firestore database with Authentication UID
        await setDoc(doc(firestore, "users", userId), {
          name: name,
          email: email,
          password: password,
        });
        toast.success("Successfully signed up");
      } catch (error) {
        console.error("Error signing up:", error);
        toast.error(error.message);
      }
    } else {
      // Signin Logic
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Successfully logged in");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-semibold mb-6 text-center">{heading}</h1>
          <form onSubmit={handleSubmit}>
            {showFields && (
              <div>
                <div className="mb-4">
                  <label className="block text-sm">Full Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500 w-full sm:text-sm"
                  />
                </div>
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
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
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500 w-full sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {signupLogic ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UserForm;

import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const SignupEmail = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // add validation here
    if (!fname) {
      toast.error("Enter your First Name");
      return;
    } else if (!lname) {
      toast.error("Enter your Last Name");
      return;
    }
    // Add Authentication
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;

      // Add data in the firestore database with Authentication UID
      await setDoc(doc(firestore, "users", userId), {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
      });
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm">First Name</label>
            <input
              name="firstName"
              value={fname}
              onChange={(e) => setfName(e.target.value)}
              className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500 w-full sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              name="lastName"
              value={lname}
              onChange={(e) => setlName(e.target.value)}
              className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500 w-full sm:text-sm"
            />
          </div>
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
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupEmail;

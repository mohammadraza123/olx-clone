import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { app } from "../../firebase/firebase";
import { FcGoogle } from "react-icons/fc";

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const Login = () => {
  const joinWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-sm w-full md:rounded-lg md:shadow-lg bg-white p-6  md:border border-gray-200">
          <div className="flex justify-end pb-2">
            <Link className="text-3xl" to="/">
              <IoClose />
            </Link>
          </div>
          <div className="text-center pb-4">
            <h1 className="text-4xl font-extrabold mb-8 text-[#002F34]">Olx</h1>
            <p className="text-[#002F34] font-semibold text-2xl">
              Login into your OLX account
            </p>
          </div>
          <div className="space-y-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border hover:border-2 border-black text-[#002F34] text-lg h-10 px-4 py-5 w-full">
              <div className="flex justify-center items-center ">
                <FcGoogle className="mx-2 text-2xl" />
                <button onClick={joinWithGoogle}>Login with Google</button>
              </div>
            </button>

            <div className="flex items-center space-x-2">
              <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
              <span className="text-zinc-400 dark:text-zinc-300 text-sm">
                OR
              </span>
              <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            </div>
            <Link
              to="/SigninEmail"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border hover:border-2 border-black text-[#002F34] text-lg h-10 px-4 py-5 w-full"
            >
              <div className="flex items-center justify-center">
                <MdEmail className="mx-2 text-2xl" />
                Login with Email
              </div>
            </Link>

            <div className="flex justify-center py-2">
              <Link to="/signup" className="text-[#3A77FF] font-bold">
                New to OLX? Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

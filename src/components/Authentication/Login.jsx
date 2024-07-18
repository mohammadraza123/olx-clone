import React from 'react'
import { IoClose } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm w-full rounded-lg shadow-lg bg-white p-6  border border-gray-200">
        <div className='flex justify-end pb-2'>
          
         <Link className='text-3xl' to="/"><IoClose /></Link> 
          
          </div>
          <div className="text-center pb-4">
            
            <h1 className="text-4xl font-extrabold mb-8 text-[#002F34]">Olx</h1>
            <p className="text-[#002F34] font-semibold text-2xl">
              Login into your OLX account
            </p>
          </div>
          <div className="space-y-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border-2 hover:border-4 border-black text-[#002F34] text-lg h-10 px-4 py-5 w-full">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="21.17" x2="12" y1="8" y2="8"></line>
                  <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
                  <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
                </svg>
                Login with Google
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
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border-2 hover:border-4 border-black text-[#002F34] text-lg h-10 px-4 py-5 w-full">
              <div className="flex items-center justify-center">
                <MdEmail className="mx-2 text-2xl" />
                Login with Email
              </div>
            </Link>
            
            
<div className='flex justify-center py-2'>
<Link to="/signup" className='text-[#3A77FF] font-bold' >New to OLX? Create an account</Link>
</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login
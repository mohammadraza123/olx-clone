import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { IoChatbubbleEllipsesOutline   } from 'react-icons/io5';

const index = () => {
  return (
    <div className=" w-[75rem] h-64 mx-36">
      <div className="flex border my-6 rounded-md">
        <div className="w-[35%]">
          <img
            src="https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg"
            alt="mobile Image"
          />
        </div>
        <div className="w-[65%] flex flex-col ml-5 justify-evenly">
            <div className='flex justify-between'>
          <p className="text-2xl font-bold">Rs 140,000</p>
          <p className='text-2xl mr-5'><FaRegHeart/> </p>
          </div>
          <p className="text-xl">iphone 13 pro max</p>
          <p className="text-sm text-gray-600">Lucknow Society korangi khi</p>
          <div className="flex gap-3 ">
          <button className="flex items-center gap-2 border-2 rounded-md px-4 text-base border-gray-800 p-1 font-semibold">

           <IoIosCall className='text-2xl'/> Call
            </button>
            <button className="flex items-center gap-2 border rounded-md px-4 text-base bg-gray-800 text-white p-1 font-semibold">
             <IoChatbubbleEllipsesOutline   className='text-2xl'/>Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index
import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../../services/helper';

const CategoryPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi(id).then((products) => {
      console.log('productsssss',products)
      setData(products);
    });
  }, [id]);

  return (
    <div className="max-w-7xl mx-36">
      {data.map((item, index) => (
        <div key={index} className="flex  h-52  border shadow-md my-6 rounded-md">
          <div className="w-[35%] h-full">
            <img
              src={item.thumbnail}
              alt="Product Image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[65%] flex flex-col ml-5 justify-evenly">
            <div className='flex justify-between'>
              <p className="text-2xl font-bold">{item.price}</p>
              <p className='text-2xl mr-5'><FaRegHeart /> </p>
            </div>
            <p className="text-xl">{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 border-2 rounded-md px-4 text-base border-gray-800 p-1 font-semibold">
                <IoIosCall className='text-2xl' /> Call
              </button>
              <button className="flex items-center gap-2 border rounded-md px-4 text-base bg-gray-800 text-white p-1 font-semibold">
                <IoChatbubbleEllipsesOutline className='text-2xl' /> Chat
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;

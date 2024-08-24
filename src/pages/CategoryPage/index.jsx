import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchApi } from '../../services/helper';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../redux/slices/favouritesItem';

const CategoryPage = () => {
  const {id } = useParams();
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()

 
  useEffect(() => {
    fetchApi(id, setData);
    }, [id]);


  const handleAddItems = (e, item) => {
    e.stopPropagation();
    dispatch(addItem(item));
    setFavorites((prev) => ({
      ...prev,
      [item.id]: true,
    }));
  };

  const handleRemoveItems = (e, item) => {
    e.stopPropagation();
    dispatch(removeItem(item));
    setFavorites((prev) => ({
      ...prev,
      [item.id]: false,
    }));
  };

  return (
    <div className="max-w-7xl mx-36">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex  h-52  border shadow-md my-6 rounded-md"
           onClick={() => navigate(`/product/${item.id}`)}
        >
          <div className="w-[35%] h-full">
            <img
              src={item.thumbnail}
              alt="Product Image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[65%] flex flex-col ml-5 justify-evenly">
            <div className="flex justify-between">
              <p className="text-2xl font-bold">{item.price}</p>
              <p className="text-2xl mr-5">
                {favorites[item.id] ? (
                  <FaHeart
                    className="w-full h-5"
                    onClick={(e) => handleRemoveItems(e, item)}
                  />
                ) : (
                  <FaRegHeart
                    className="w-full h-5"
                    onClick={(e) => handleAddItems(e, item)}
                  />
                )}
              </p>
            </div>
            <p className="text-xl">{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 border-2 rounded-md px-4 text-base border-gray-800 p-1 font-semibold">
                <IoIosCall className="text-2xl" /> Call
              </button>
              <button className="flex items-center gap-2 border rounded-md px-4 text-base bg-gray-800 text-white p-1 font-semibold">
                <IoChatbubbleEllipsesOutline className="text-2xl" /> Chat
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;

import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem } from '../../redux/slices/favouritesItem';
import { getRandomDays } from '../../services/helper';

const index = () => {

const dispatch = useDispatch();

  const navigate = useNavigate();

  const cart = useSelector((state) => state.favourites.wishList)

const handleRemoveItems =(e,item)=>{
e.stopPropagation();
dispatch(removeItem(item));
}

  return (
    <div className="mx-auto max-w-7xl px-2 pt-3 sm:px-6 lg:px-8">
      <h1 className="font-bold pt-4 pb-4 text-2xl">My Favourites</h1>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex-none w-72 rounded border border-[#d8dfe0] bg-white cursor-pointer"
              style={{ minWidth: "280px" }}
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                className="w-full h-48 object-cover"
                src={item.images[0]}
                alt={item.title}
              />
              <div className="px-4 py-2 flex items-center justify-between">
                <div className="font-bold text-xl mb-2">{`$ ${item.price}`}</div>
                <div
                  onClick={(e)=> handleRemoveItems(e,item)} >
                  <FaRegHeart className="w-full h-5" />
                </div>
              </div>
              <div>
                <p className="px-4 text-gray-700 text-base">{item.title}</p>
              </div>
              <div className="px-4 pt-4 pb-2">
                <p className="text-gray-700 text-base">{item.returnPolicy}</p>
                <p className="text-gray-700 text-base">{getRandomDays()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index
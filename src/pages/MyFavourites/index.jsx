import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Myfavourites() {

const favourites = useSelector((state)=>state.favourites.wishList);
console.log(favourites)
const navigate = useNavigate();
  
const getRandomDays = () => {
  const randomDays = Math.floor(Math.random() * 30 + 1);
  return `${randomDays} days ago`;
};

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 pt-3 sm:px-6 lg:px-8">
        <h1 className="font-bold pt-4 pb-4 text-2xl">my favourites</h1>
        <div className="overflow-x-auto">
          <div className="flex space-x-4">
            {favourites.map((item, index) => (
              <div
                key={index}
                className="flex-none w-72 rounded border border-[#d8dfe0] bg-white cursor-pointer"
                style={{ minWidth: "280px" }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.images[0]}
                  alt=""
                />
                <div className="px-4 py-2 flex items-center justify-between">
                  <div className="font-bold text-xl mb-2">{`$ ${item.price}`}</div>
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
    </>
  );
}

export default Myfavourites;

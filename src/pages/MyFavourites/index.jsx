import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Myfavourites(props) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    const url = `https://dummyjson.com/products/category/${props.apiCategory}?limit=4`;
    axios
      .get(url)
      .then((response) => setData(response.data.products))
      .catch((err) => console.log(err));
  };

  const getRandomDays = () => {
    const randomDays = Math.floor(Math.random() * 30 + 1);
    return `${randomDays} days ago`;
  };

  return (
    <div className="mx-auto max-w-7xl px-2 pt-3 sm:px-6 lg:px-8">
      <h1 className="font-bold pt-4 pb-4 text-2xl">{props.title}</h1>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-none w-72 rounded border border-[#d8dfe0] bg-white cursor-pointer"
              style={{ minWidth: "280px" }} // Adjust as needed for mobile view
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                className="w-full h-48 object-cover"
                src={item.images[0]}
                alt=""
              />
              <div className="px-4 py-2 flex items-center justify-between">
                <div className="font-bold text-xl mb-2">{`$ ${item.price}`}</div>
                <div>
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

export default Myfavourites;

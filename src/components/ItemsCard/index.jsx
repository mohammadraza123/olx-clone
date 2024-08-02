import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/favouritesItem";
import { API_URL, getRandomDays } from "../../services/helper";

function ItemsCard(props) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

const dispatch = useDispatch()

  useEffect(() => {
    fetchApi();
  }, [props.apiCategory]);

  const fetchApi = () => {
    const url = `${API_URL}category/${props.apiCategory}?limit=4`;
    axios
      .get(url)
      .then((response) => setData(response.data.products))
      .catch((err) => console.log(err));
  };

//   const handleAddItems = (e, item)=>{
// e.stopPropagation();
// dispatch(addItem(item));

//   }

  return (
    <div className="mx-auto max-w-7xl px-2 pt-3 sm:px-6 lg:px-8">
      <h1 className="font-bold pt-4 pb-4 text-xl md:text-2xl">{props.title}</h1>
      <div
        className="overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex space-x-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-none w-64 sm:w-72 rounded border border-[#d8dfe0] bg-white cursor-pointer"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                className="w-full h-32 sm:h-48 object-cover"
                src={item.images[0]}
                alt={item.title}
              />
              <div className="px-4 py-2 flex items-center justify-between">
                <div className="font-bold text-lg sm:text-xl mb-2">{`$ ${item.price}`}</div>
                <div>
                  <FaRegHeart
                    className="w-full h-5"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addItem(item));
                    }}
                  />
                </div>
              </div>
              <div>
                <p className="px-4 text-gray-700 text-sm sm:text-base">
                  {item.title}
                </p>
              </div>
              <div className="px-4 pt-4 pb-2">
                <p className="text-gray-700 text-sm sm:text-base">
                  {item.returnPolicy}
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  {getRandomDays()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemsCard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import PageWrapper from "../PageWrapper";
import { IoIosCall } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SearchInput = () => {
  const [data, setData] = useState([]);
  const { search } = useParams();

  useEffect(() => {
    const url = "https://dummyjson.com/products/";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageWrapper>
      <div className="w-full md:max-w-7xl mx-5 md:mx-36">
        {data
          //   .filter((item) => item.includes(search))
          .map((item, index) => (
            <div
              key={index}
              className="flex  h-52  border shadow-md my-6 rounded-md cursor-pointer"
            >
              <div className="w-[35%] h-full">
                <img
                  src={item.thumbnail}
                  alt="Product Image"
                  className="w-full h-full object-cover md:object-contain"
                />
              </div>
              <div className="w-[65%] flex flex-col ml-5 justify-evenly">
                <div className="flex justify-between">
                  <p className="text-lg md:text-2xl font-bold">{item.price}</p>
                  <p className="text-2xl mr-5">
                    <FaHeart className="w-full h-5" />
                  </p>
                </div>
                <p className="text-base md:text-xl">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <button className="flex items-center  gap-2 border-2 rounded-md px-4 text-base border-gray-800 p-1 font-semibold">
                    <IoIosCall className="text-lg md:text-2xl" />
                    Call
                  </button>
                  <button className="flex items-center gap-2 border rounded-md px-4 text-base bg-gray-800 text-white p-1 font-semibold">
                    <IoChatbubbleEllipsesOutline className="text-lg md:text-2xl" />
                    Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </PageWrapper>
  );
};

export default SearchInput;

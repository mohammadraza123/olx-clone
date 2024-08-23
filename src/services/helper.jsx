import axios from 'axios';

export const API_URL = "https://dummyjson.com/products/";

export const getRandomDays = () => {
  const randomDays = Math.floor(Math.random() * 30 + 1);
  return `${randomDays} days ago`;
};

export const fetchApi = (category,limit=20) => {
  const url = `${API_URL}category/${category}?limit=${limit}`;

  return axios
    .get(url)
    .then((response) => response.data.products)
    .catch((err) => {
      console.log(err);
    });
};

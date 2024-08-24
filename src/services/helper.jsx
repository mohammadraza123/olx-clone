import axios from "axios";

export const API_URL = "https://dummyjson.com/products/";

export const getRandomDays = () => {
  const randomDays = Math.floor(Math.random() * 30 + 1);
  return `${randomDays} days ago`;
};

export const fetchApi = (apiCategory, setData) => {
  const url = `${API_URL}category/${apiCategory}`;
  axios
    .get(url)
    .then((response) => {
      setData(response.data.products); // Update the state with fetched data
    })
    .catch((err) => console.log(err));
};

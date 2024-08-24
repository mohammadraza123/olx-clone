import axios from "axios";

export const API_URL = "https://dummyjson.com/products/";

export const getRandomDays = () => {
  const randomDays = Math.floor(Math.random() * 30 + 1);
  return `${randomDays} days ago`;
};

export const fetchApi = async(category, setData) => {
  const url = `${API_URL}category/${category}`

  try {
    await axios.get(url).then((response) => {
      setData(response.data.products);
    });
  } catch (error) {
    console.log(error);
  }
}


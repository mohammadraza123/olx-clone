export const API_URL = "https://dummyjson.com/products/";

export const getRandomDays = () => {
  const randomDays = Math.floor(Math.random() * 30 + 1);
  return `${randomDays} days ago`;
};
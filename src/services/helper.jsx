export const API_URL = "https://dummyjson.com/products/";

export const getRandomDays = () => {
  const randomDays = Math.floor(Math.random() * 30 + 1);
  return `${randomDays} days ago`;
};

// export const fetchApi = (category) => {
//   const url = `${API_URL}category/${category}?limit=4`;
//   axios
//     .get(url)
//     .then((response) => {
//       setData(response.data.products);
//     })
//     .catch((err) => console.log(err));
// };

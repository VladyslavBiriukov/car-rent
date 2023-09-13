import axios from "axios";

axios.defaults.baseURL = "https://6501961d736d26322f5bf63c.mockapi.io";

export const getCar = async () => {
  const car = await axios.get("/vehicle");
  return car.data;
};
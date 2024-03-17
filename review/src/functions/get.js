import axios from "axios";

export const getAllRestaurants = async () => {
  const res = await axios.get("http://localhost:8080/api/get/reviewList");
//   console.log(res);
  return res;
};

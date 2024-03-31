import axios from "axios";

export const getAllRestaurants = async () => {
  const res = await axios.get("http://localhost:8080/api/get/reviewList");
//   console.log(res);
  return res;
};

export const getUserRestaurants = async (currUser) => {
  const res = await axios.get("http://localhost:8080/api/get/userReviewList",{
    params:{
      currUser:currUser
    }
  });
//   console.log(res);
  return res;
};

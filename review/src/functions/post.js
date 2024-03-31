import axios from "axios";

export const postRestaurants = async (user, review) => {
  const res = await axios.post("http://localhost:8080/api/post/restaurant", {
    user: user,
    name: review.name,
    address: review.address,
    cousines: review.cousines,
    rating: review.rating,
    comment: review.comment,
    timestamp: review.timestamp,
  });
};

export const postUsers = async (userName, review) => {
  const res = await axios.post("http://localhost:8080/api/post/user", {
    userName: userName,
    restaurant: review.restaurant,
    rating: review.rating,
    comment: review.comment,
  });
};

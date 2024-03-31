import axios from "axios";

export const postRestaurants = async (user, review) => {
  const res = await axios.post("http://localhost:8080/api/post", {
    user: user,
    name: review.name,
    address: review.address,
    cousines: review.cousines,
    rating: review.rating,
    comment: review.comment,
    timestamp: review.timestamp,
  });
};

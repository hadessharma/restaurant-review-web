import React from "react";
import { useEffect, useState } from "react";

import { getUserRestaurants } from "../functions/get";
import { Button, Typography } from "@material-tailwind/react";
import RestaurantInfo from "./restaurantInfo";
import RestaurantCard from "../components/cards/restaurantCard";

function UserHome(props) {
const [userReviewsToDisplay, setuserReviewsToDisplay] = useState("");

useEffect(() => {
    const getData = async () => {
      try {
        const result = await getUserRestaurants(props.user.displayName);
        setuserReviewsToDisplay(result.data.data);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

return (
    <>
      <div>
        <Typography variant="h2" color="blue-gray">
          Hi User
        </Typography>
        {/*<RestaurantInfo />*/}
      </div>
      {userReviewsToDisplay ? (
        <div className="flex flex-rows gap-2">
          {userReviewsToDisplay.map((item) => (
            <RestaurantInfo
              key={item._id}
              //image={item.image}
              restaurantName={item.restaurant}
              description={item.review[0].comment}
              openEditModal={null}
             // totalReviews={item.avgRating}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default UserHome;

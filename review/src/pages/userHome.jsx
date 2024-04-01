import React from "react";
import { useEffect, useState } from "react";

import { getUserRestaurants } from "../functions/get";
import { Button, Typography } from "@material-tailwind/react";
import RestaurantInfo from "./restaurantInfo";

function UserHome(props) {
  const [userReviewsToDisplay, setuserReviewsToDisplay] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getUserRestaurants(props.user);
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
          Hi, {props.user}
        </Typography>
        {/*<RestaurantInfo />*/}
      </div>
      {userReviewsToDisplay ? (
        <div className="flex flex-rows gap-2">
          {userReviewsToDisplay.map((item) => (
            <RestaurantInfo
            key={item._id} // Add key prop here
            id={item._id}
                restaurantName={item.restaurant}
              description={item.review[0].comment}
              openEditModal={null}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default UserHome;

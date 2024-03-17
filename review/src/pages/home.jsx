import { Button, Typography } from "@material-tailwind/react";

import { getAllRestaurants } from "../functions/get";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/cards/restaurantCard";

function Home() {
  const [reviewsToDisplay, setreviewsToDisplay] = useState("");
  const data = [
    {
      imageLink: "https://source.unsplash.com/random",
    },
    {
      imageLink:
        "https://source.unsplash.com/cooked-food-on-black-bowl-ZuIDLSz3XLg",
    },
    { imageLink: "https://source.unsplash.com/raspberry-cake-Mzy-OjtCI70" },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getAllRestaurants();
        setreviewsToDisplay(result.data.data);
        console.log(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <Typography variant="h3" className="">
          World's Best Review Site. Log In to review restaurants in your area or
          around the world.
        </Typography>
      </div>
      {reviewsToDisplay ? (
        <div>
          <ul>
            {reviewsToDisplay.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-100 w-full max-w-full rounded-lg object-cover object-center rounded-none"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;

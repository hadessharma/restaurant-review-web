import { Button, Typography } from "@material-tailwind/react";

import { getAllRestaurants } from "../functions/get";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/cards/restaurantCard";

function Home() {
  const [reviewsToDisplay, setReviewsToDisplay] = useState("");
  const LINKS = [
    {
      title: "Product",
      items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News"],
    },
    {
      title: "Resource",
      items: ["Blog", "Newsletter", "Events", "Help center"],
    },
  ];
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getAllRestaurants();
        setReviewsToDisplay(result.data.data);
        // console.log(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-y-auto flex-grow">
        <div className="flex justify-center items-center">
          <div
            className="bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://source.unsplash.com/cooked-food-on-black-bowl-ZuIDLSz3XLg)`,
            }}
          >
            <div className="flex justify-center">
              <Typography variant="h3" className="" color="white">
                World's Best Review Site. Log In to review restaurants in your
                area or around the world.
              </Typography>
            </div>
            {reviewsToDisplay ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-2">
                {reviewsToDisplay.map((item) => (
                  <RestaurantCard
                    key={item._id}
                    image={item.image}
                    restaurantName={item.name}
                    description={item.reviews[0].comment}
                    openEditModal={null}
                    totalReviews={item.avgRating}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <footer className="w-full bg-gray-300">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <Typography variant="h5" className="mb-6">
              REVIEW!!🤑
            </Typography>
            <div className="grid grid-cols-3 justify-between gap-4">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-3 font-medium opacity-40"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              &copy; {currentYear}{" "}
              <a href="https://material-tailwind.com/">REVIEW!!🤑</a>. All
              Rights Reserved.
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                Add your social media icons here
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

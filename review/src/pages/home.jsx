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
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(https://source.unsplash.com/cooked-food-on-black-bowl-ZuIDLSz3XLg)`,
        }}>
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white">
            <Typography variant="h3" className="mb-4">
              Welcome to REVIEW!!🤑
            </Typography>
            <Typography variant="h3" className="mb-8">
              Log In to review restaurants in your area or around the world.
            </Typography>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reviewsToDisplay &&
            reviewsToDisplay.map((item) => (
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
      </div>
      <footer className="bg-gray-300">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography variant="h6" className="mb-4 text-blue-gray-700">
                  {title}
                </Typography>
                <ul className="mb-8">
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="block mb-2 hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center border-t border-blue-gray-100 pt-8">
            <Typography variant="h3" className="text-blue-gray-700">
              &copy; {currentYear} REVIEW!!🤑. All Rights Reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

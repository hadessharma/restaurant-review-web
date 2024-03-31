import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { signInwithGoogle } from "../auth/googleAuth";
import { logout } from "../auth/firebase";
import NewReviewModal from "../components/modals/newReview";

import { Navbar, Typography, Button } from "@material-tailwind/react";

function MainNavbar() {
  const [user, setUser] = useState();
  const auth = getAuth();
  const [isOpenNewReview, setIsOpenNewReview] = useState(false);

  const navigate = useNavigate();

  const handleOnClickReviews = () => {
    navigate("/userHome");
  };

  const openModalNewReview = () => {
    setIsOpenNewReview(!isOpenNewReview);
  };

  useEffect(() => {
    const authChange = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user.displayName);
      } else {
        setUser(null);
        console.log("No user.");
      }
    });
    return () => {
      authChange();
    };
  }, [auth]);
  const navList = (
    <>
      <ul className="mt-2 mb-2 flex flex-col lg:mb-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography as="li" variant="small" color="blue-gray">
          <Link to="/">REVIEW!!🤑</Link>
        </Typography>
      </ul>
      {/* <ul className="flex items-center justify-between text-blue-gray-900">
        <Typography as="li" variant="small" color="blue-gray">
          <Link to=""
        </Typography>
      </ul> */}
    </>
  );
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <NewReviewModal
        isOpen={isOpenNewReview}
        openModal={openModalNewReview}
        userName={user ? user.displayName : ""}
      />
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div>
          {user ? (
            <div className="">
              <Button
                className="px-4"
                variant="text"
                onClick={handleOnClickReviews}
              >
                Your Reviews
              </Button>
              <Button
                className="px-4"
                variant="text"
                onClick={openModalNewReview}
              >
                Add Review
              </Button>
              <Button className="px-4" variant="filled" onClick={logout}>
                Log Out
              </Button>
            </div>
          ) : (
            <Button variant="filled" className="" onClick={signInwithGoogle}>
              <span>Log In</span>
            </Button>
          )}
        </div>
      </div>
    </Navbar>
  );
}

export default MainNavbar;

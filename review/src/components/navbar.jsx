import { Navbar, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { signInwithGoogle } from "../auth/googleAuth";

function MainNavbar() {
  const navList = (
    <ul className="mt-2 mb-2 flex flex-col lg:mb-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray">
        <Link to="/">REVIEW!!🤑</Link>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div>
          <Button variant="filled" className="" onClick={signInwithGoogle}>
            <span>Log In</span>
          </Button>
        </div>
      </div>
    </Navbar>
  );
}

export default MainNavbar;

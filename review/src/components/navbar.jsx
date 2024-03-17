import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function MainNavbar() {
  const navList = (
    <ul>
      <Typography as="li" variant="small" color="blue-gray">
        <Link to="/">
          REVIEW!!🤑
        </Link>
      </Typography>
    </ul>
  );
  return (
    <Navbar>
      <div>{navList}</div>
    </Navbar>
  );
}

export default MainNavbar;

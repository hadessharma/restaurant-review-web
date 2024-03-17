import { Button, Typography } from "@material-tailwind/react";
import "./home.css"
function Home() {
  return (
    <div className="home">
      <h1 className="heading">Heading</h1>
      <Typography variant="small" color="blue-gray">
        TEXT
      </Typography>
      <Button variant="filled">
        <span>Log In</span>
      </Button>
    </div>
  );
}

export default Home;

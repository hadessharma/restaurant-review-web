import React from "react";


import { Button, Typography } from "@material-tailwind/react";
import RestaurantInfo from "./restaurantInfo"


function UserHome(){
    return(
        <div>
           <Typography variant="h2" color="blue-gray">
                Hi User
           </Typography>
           <RestaurantInfo/>
        </div>
    )
}

export default UserHome;
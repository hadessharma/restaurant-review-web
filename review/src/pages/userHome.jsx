import React from "react";

import { Button, Typography } from "@material-tailwind/react";

function UserHome(){
    console.log("Hi in usetHome")
    return(
        <div>
           <Typography variant="h2" color="blue-gray">
                Hi User
           </Typography>
        </div>
    )
}

export default UserHome;
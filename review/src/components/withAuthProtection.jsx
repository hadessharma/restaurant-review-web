import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import { logIn, logOut } from "../reduxStore/functions/userReducer";

const withAuthProtection = (UserHome) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigateTo("/");
    }
  }, [navigateTo]); // Add navigateTo as a dependency
  console.log(loggedInUser.userName)
  return loggedInUser.userName ? <UserHome user={loggedInUser.userName}/> : null; // Conditionally render UserHome
};

export default withAuthProtection;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const withAuthProtection = (UserHome) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const navigateTo = useNavigate();

  useEffect(() => {
    const authChange = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return authChange;
  }, [auth]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!user) {
    return navigateTo("/");
  }

  return <UserHome />;
};

export default withAuthProtection;

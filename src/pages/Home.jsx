import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const redirect = useNavigate();
  const [allPhones, setAllPhones] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPhones();
  }, []);

  const getPhones = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");
      console.log(response);
      setAllPhones(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      redirect("/error");
    }
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return <div>Home</div>;
}

export default Home;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);   
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      console.log(res?.accessToken);
      if (!res?.accessToken) {
        navigate("/");
      }
      else{
        setLoading(false);
      }
    });
  }, []);

  return loading ? <Loader/> : <HomeComponent />;
}

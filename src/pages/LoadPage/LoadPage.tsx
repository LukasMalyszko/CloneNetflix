import { useEffect } from "react";
import { auth } from "../../config/firebase";
import { Navigate } from "react-router-dom";
import "./LoadPage.scss";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setActiveUser,
//   // setUserLogOutState,
//   selectUserName,
//   selectUserEmail,
// } from "../../redux/userSlice";

export const LoadPage = () => {
  // const dispatch = useDispatch();

  // const userName = useSelector(selectUserName);
  // const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    const fetchData = async () => {
      await auth.authStateReady();
      console.log("user ", auth.currentUser);
      
      };
      fetchData();
    }, []);
    
    return (
    <div>
      <div className="loader-container">
        <img src="/loader-red.svg" className="loader" />
      </div>
    </div>
  );
};

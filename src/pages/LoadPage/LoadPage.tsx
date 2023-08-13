import { useEffect } from "react";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "./LoadPage.scss";
import { useDispatch } from "react-redux";
import {
  setActiveUser,
} from "../../redux/userSlice";
import { ImageComponent } from "../registrationPage/components/ImageComponent/ImageComponent";

export const LoadPage = () => {
  const dispatch = useDispatch();


  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await auth.authStateReady();

      if (auth.currentUser) {
        dispatch(
          setActiveUser({
            userName: auth.currentUser.displayName as string,
            userEmail: auth.currentUser.email as string,
          })
        );
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ImageComponent src="netflix-image.png" name="netflix logo" />
      
    </>
  );
};

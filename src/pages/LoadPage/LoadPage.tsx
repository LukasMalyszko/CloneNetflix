import { useEffect } from "react";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "./LoadPage.scss";
import { useDispatch } from "react-redux";
import {
  setActiveUser,
  // setUserLogOutState,
  // selectUserName,
  // selectUserEmail,
} from "../../redux/userSlice";
import { ImageComponent } from "../registrationPage/components/ImageComponent/ImageComponent";

export const LoadPage = () => {
  const dispatch = useDispatch();
  // const userName = useSelector(selectUserName);
  // const userEmail = useSelector(selectUserEmail);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await auth.authStateReady();

      console.log("user ", auth.currentUser);
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
      <ImageComponent src="netflix-image" name="netflix logo" />
      <div className="loader-container">
        <img src="/loader-red.svg" className="loader" />
      </div>
    </>
  );
};

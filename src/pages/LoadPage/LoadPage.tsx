import { useEffect } from "react";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "./LoadPage.scss";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../redux/userSlice";

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
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setTimeout(() => navigate("/login"), 1500);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="load-page">
      <div className="load-page__wrapper">
        <div className="load-page__img-container">
          <img src="/netflix-black.png" alt="netflix logo" />
        </div>
        <div className="load-page__load-container">
          <img src="/loader-red.svg" />
        </div>
      </div>
    </div>
  );
};

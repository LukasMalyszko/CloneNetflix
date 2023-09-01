import "./LoadPage.scss";
import { useEffect } from "react";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../redux/userSlice";

export const LoadPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await auth.authStateReady();
      // console.log(auth.currentUser?.uid)

      if (auth.currentUser) {
        dispatch(
          setActiveUser({
            userName: auth.currentUser.displayName as string,
            userEmail: auth.currentUser.email as string,
            userID: auth.currentUser.uid as string,
          })
        );
      } else {
        setActiveUser({
          userName: "",
          userEmail: "",
          userID: "",
        })
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

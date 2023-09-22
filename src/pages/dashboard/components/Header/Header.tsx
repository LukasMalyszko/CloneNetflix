import "../Header/Header.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserImage,
  selectUserName,
  setActiveUser,
} from "../../../../redux/userSlice";
import { ShowList } from "../ShowList/ShowList";
import { useEffect, useState } from "react";
import { auth, db } from "../../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

export const Header = () => {
  const userID = auth.currentUser?.uid;
  const userName = useSelector(selectUserName);
  const userImage = useSelector(selectUserImage);
  const userEmail = useSelector(selectUserEmail);

  const [isListVisible, setIsListVisible] = useState(false);

  const dispatch = useDispatch();

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const getUserName = async (userID?: string) => {
    try {
      const userDataRef = doc(db, `usersData/${userID}/userData/userName/`);
      const userDataSnapshot = await getDoc(userDataRef);

      if (userDataSnapshot.exists()) {
        const userName = userDataSnapshot.data().userName;
        dispatch(setActiveUser({ userName }));
      } else {
        console.error("Dokument nie istnieje.");
      }
    } catch (error) {
      console.error("Błąd podczas pobierania userName:", error);
    }
  };

  const getUserAvatar = async (userID?: string) => {
    try {
      const userImageRef = doc(db, `usersData/${userID}/userData/userImage/`);
      const userImageSnapshot = await getDoc(userImageRef);

      if (userImageSnapshot.exists()) {
        const userImage = userImageSnapshot.data().userImage;
        
        dispatch(setActiveUser({ userImage }));
      } else {
        console.error("Dokument nie istnieje");
      }
    } catch (error) {
      console.error("Bład pobierania userImage: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserName(userID);
      await getUserAvatar(userID);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-header-component">
      <div className="dashboard-header-component__top-gradient"></div>
      <div className="dashboard-header-component__main-img-container skeleton">
        <img src="/wednesday.png" alt="Wednesday" loading="lazy" />
      </div>
      <div className="dashboard-header-component__header-content">
        <div className="dashboard-header-component__top">
          <div className="dashboard-header-component__img-logo-container ">
            <img src="/NETFLIX.svg" alt="netflix logo" />
          </div>
          <div className="dashboard-header-component__display-profile">
            <div className="dashboard-header-component__profile-container">
              <div className="dashboard-header-component__display-name">
                {`Witaj
                ${!userName ? userEmail : userName}`}
              </div>
              <div
                className={`dashboard-header-component__img-container ${
                  !userImage ? "skeleton" : ""
                } `}
                onClick={toggleListVisibility}
              >
                <img src={userImage} alt="User avatar" loading="lazy" />
              </div>
            </div>
            {<ShowList isListVisible={isListVisible} />}
          </div>
        </div>
        <div className="dashboard-header-component__rating-container">
          <div className="dashboard-header-component__img-container">
            <img src="/top10.png" alt="top10" />
          </div>
          <div className="dashboard-header-component__rating-text">
            Nr 5 wśród seriali dzisiaj
          </div>
        </div>
        <div className="dashboard-header-component__title-img-container">
          <img src="/title 1.svg" alt="" />
        </div>
        <div className="dashboard-header-component__title-description">
          Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi śledztwo
          w sprawie serii zabójstw, przysparzając sobie nowych przyjaciół i
          wrogów w Akademii Nevermore.
        </div>
        <div className="dashboard-header-component__buttons-container">
          <button className="dashboard-header-component__primary-button">
            <img src="/play.svg" alt="play icon" />
            <div>Odtwórz</div>
          </button>
          <button className="dashboard-header-component__secondary-button">
            <img src="/info-circle.svg" alt="play icon" />
            <div>Więcej informacji</div>
          </button>
        </div>
      </div>
    </div>
  );
};

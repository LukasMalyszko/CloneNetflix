import "../Header/Header.scss";
import { useSelector } from "react-redux";
import { selectUserName, selectUserEmail } from "../../../../redux/userSlice";
// import { Link } from "react-router-dom";
import { ShowList } from "../ShowList/ShowList";
import { useState } from "react";

export const Header = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div className="dashboard-header-component">
      <div className="dashboard-header-component__top-gradient"></div>
      <div className="dashboard-header-component__main-img-container skeleton">
        <img src="/wednesday.png" alt="Wednesday" loading="lazy" />
      </div>
      <div className="dashboard-header-component__header-content">
        <div className="dashboard-header-component__top">
          <div className="dashboard-header-component__img-logo-container">
            <img src="/NETFLIX.svg" alt="netflix logo" />
          </div>
          <div className="dashboard-header-component__display-profile">
            <div className="dashboard-header-component__profile-container">
              <div className="dashboard-header-component__display-name">
                {`Witaj
                ${!userName ? userEmail : userName}`}
              </div>
              <div className="dashboard-header-component__img-container" onClick={toggleListVisibility}>
                <img
                  src="https://cdn.pixabay.com/photo/2023/09/10/00/49/lovebird-8244066_1280.jpg"
                  alt=""
                />
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

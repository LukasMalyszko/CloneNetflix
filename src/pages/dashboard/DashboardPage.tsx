import "./components/Swipers/SwiperNoLoop/SwiperNoLoop.scss";
import "./components/Swipers/SwiperLoop/SwiperLoop.scss";
import "./DashboardPage.scss";
import { Header } from "./components/Header/Header";
import { SwiperNoLoop } from "./components/Swipers/SwiperNoLoop/SwiperNoLoop";
import { SwiperLoop } from "./components/Swipers/SwiperLoop/SwiperLoop";
import { ShowProps } from "./components/Swipers/Intetfaces";
import { LogOutComponent } from "../../components/LogOutComponent/LogOutComponent";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import {
  collection,
  // doc,
  // getDocs,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";

export const DashboardPage = () => {
  const showsCollectionRef = collection(db, "showsAppreciated");
  // const showsCollectionPopularNowRef = collection(db, "showsPopularNow");
  // const showsCollectionTopTenRef = collection(db, "showsTopTen");

  const [showsArrayAppreciated, setShowsArrayAppreciated] = useState<
    ShowProps[]
  >([]);

  const getShows = async () => {
    onSnapshot(
      showsCollectionRef,
      (querySnapshot: QuerySnapshot<ShowProps>) => {
        const newData: ShowProps[] = [];
        querySnapshot.forEach((doc) => {
          const showData = doc.data();
          newData.push({
            id: doc.id,
            ...showData,
          });
        });
        setShowsArrayAppreciated(newData);
      }
    );
  };

  useEffect(() => {
    getShows();
  }, []);
  console.log("dashboard showsArray", showsArrayAppreciated);

  return (
    <div className="dashboard-page">
      <Header />

      <div className="swiper-container">
        <SwiperLoop
          showsArray={showsArrayAppreciated}
          showsHeaderTitle={"Docenione przez krytyków"}
        />
        <SwiperLoop
          showsArray={showsArrayAppreciated}
          showsHeaderTitle={"Popularne teraz"}
        />
        <SwiperLoop
          showsArray={showsArrayAppreciated}
          showsHeaderTitle={"Obejrzyj ponownie"}
        />
        <SwiperNoLoop
          showsArray={showsArrayAppreciated}
          showsHeaderTitle={"Top 10 seriali w Polsce dzisiaj"}
        />
        <SwiperNoLoop
          showsArray={showsArrayAppreciated}
          showsHeaderTitle={"Top 10 seriali na świecie dzisiaj"}
        />
      </div>
      <LogOutComponent />
    </div>
  );
};

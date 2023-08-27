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
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";

export const DashboardPage = () => {
  const showsCollectionRef: any = collection(db, "showsAppreciated");

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
            ...showData,
            id: doc.id,
          });
        });
        setShowsArrayAppreciated(newData);
      }
    );
  };

  useEffect(() => {
    getShows();
  }, []);

  const showsArrayPopularNow = [...showsArrayAppreciated]
    .sort((a, b) => b.watchedCounter - a.watchedCounter);

const showsWatchedArray = showsArrayAppreciated.filter((show) => show.watchedCounter > 0);
  console.log("dashboard showsArray", showsWatchedArray);

  const showsTopTenWatched = showsArrayAppreciated.slice() // Stworzenie kopii tablicy
  .sort((a, b) => b.watchedCounter - a.watchedCounter) // Sortowanie malejąco
  .slice(0, 10);

  return (
    <div className="dashboard-page">
      <Header />

      <div className="swiper-container">
        <SwiperLoop
          showsArray={showsArrayAppreciated}
          showsHeaderTitle={"Docenione przez krytyków"}
        />
        <SwiperLoop
          showsArray={showsArrayPopularNow}
          showsHeaderTitle={"Popularne teraz"}
        />
        <SwiperLoop
          showsArray={showsWatchedArray}
          showsHeaderTitle={"Obejrzyj ponownie"}
        />
        <SwiperNoLoop
          showsArray={showsTopTenWatched}
          showsHeaderTitle={"Top 10 seriali w Polsce dzisiaj"}
        />
        <SwiperNoLoop
          showsArray={showsTopTenWatched}
          showsHeaderTitle={"Top 10 seriali na świecie dzisiaj"}
        />
      </div>
      <LogOutComponent />
    </div>
  );
};

import "./components/Swipers/SwiperNoLoop/SwiperNoLoop.scss";
import "./components/Swipers/SwiperLoop/SwiperLoop.scss";
import "./DashboardPage.scss";
import "../dashboard/components/Swipers/skeleton.scss";
import { Header } from "./components/Header/Header";
import { SwiperNoLoop } from "./components/Swipers/SwiperNoLoop/SwiperNoLoop";
import { SwiperLoop } from "./components/Swipers/SwiperLoop/SwiperLoop";
import { ShowProps } from "./components/Swipers/Intetfaces";
import { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";

export const DashboardPage = () => {
  const userID = auth.currentUser?.uid;
  const showsWatchAgainCollectionRef: any = collection(
    db,
    `showsWatchAgain/${userID}/userShows`
  );

  const [showsArrayAppreciated, setShowsArrayAppreciated] = useState<
    ShowProps[]
  >([]);
  const [showsArrayPopular, setShowsArrayPopular] = useState<ShowProps[]>([]);
  const [showsArrayWatchAgain, setShowsArrayWatchAgain] = useState<ShowProps[]>(
    []
  );

  const fetchData = (
    collectionRef: any,
    setData: React.Dispatch<React.SetStateAction<ShowProps[]>>
  ) => {
    onSnapshot(collectionRef, (querySnapshot: QuerySnapshot<ShowProps>) => {
      const newData: ShowProps[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
    });
  };

  useEffect(() => {
    const showsCollectionRef = collection(db, "showsAppreciated");
    const showsPopularCollectionRef = collection(db, "showsPopular");

    fetchData(showsCollectionRef, setShowsArrayAppreciated);
    fetchData(showsPopularCollectionRef, setShowsArrayPopular);
    fetchData(showsWatchAgainCollectionRef, setShowsArrayWatchAgain);
  }, []);

  const showsArrayPopularNow = showsArrayPopular.sort(
    (a, b) => b.watchedCounter - a.watchedCounter
  );

  const showsTopTenWatched = showsArrayAppreciated
    .slice()
    .sort((a, b) => b.watchedCounter - a.watchedCounter)
    .slice(0, 10);

  const showsTopWorld = showsTopTenWatched.slice().reverse();

  // const [isVisible, setIsVisible] = useState(false);

  // const observeRef = useRef<HTMLDivElement | null>(null);
  // console.log(observeRef.current)

  // useEffect(() => {
  //   if (observeRef.current) {
  //     const options = {
  //       root: null,
  //       threshold: 0.1,
  //     };

  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setTimeout(() => {
  //             setIsVisible(entry.isIntersecting);
  //           }, 1000)

  //           observer.disconnect();
  //           console.log("Element jest w obszarze widoczności");
  //         }
  //       });
  //     }, options);

  //     observer.observe(observeRef.current);

  //     return () => {
  //       observer.disconnect();
  //     };
  //   }
  // }, []);

  return (
    <div className="dashboard-page">
      <Header />

      <div className="swiper-container">
        {/* <div ref={observeRef}> */}
          <SwiperLoop
            // isVisible={isVisible}
            showsArray={showsArrayAppreciated}
            showsHeaderTitle={"Docenione przez krytyków"}
          />
        {/* </div> */}
        {/* <div ref={observeRef}> */}
          <SwiperLoop
            // isVisible={isVisible}
            showsArray={showsArrayPopularNow}
            showsHeaderTitle={"Popularne teraz"}
          />
        {/* </div> */}
        {/* <div ref={observeRef}> */}
          <SwiperLoop
            // isVisible={isVisible}
            showsArray={showsArrayWatchAgain}
            showsHeaderTitle={"Obejrzyj ponownie"}
          />
        {/* </div> */}
        {/* <div ref={observeRef}> */}
          <SwiperNoLoop
            // isVisible={isVisible}
            showsArray={showsTopTenWatched}
            showsHeaderTitle={"Top 10 seriali w Polsce dzisiaj"}
          />
        {/* </div> */}
        {/* <div ref={observeRef}> */}
          <SwiperNoLoop
            // isVisible={isVisible}
            showsArray={showsTopWorld}
            showsHeaderTitle={"Top 10 seriali na świecie dzisiaj"}
          />
        {/* </div> */}
      </div>
    </div>
  );
};

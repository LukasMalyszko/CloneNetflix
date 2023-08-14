import { Header } from "./components/Header/Header";
import { SwiperNoLoop } from "./components/Swipers/SwiperNoLoop/SwiperNoLoop";
import { SwiperLoop } from "./components/Swipers/SwiperLoop/SwiperLoop";
import { showsProps } from "./components/Swipers/Intetfaces";
import "./components/Swipers/SwiperNoLoop/SwiperNoLoop.scss";
import "./components/Swipers/SwiperLoop/SwiperLoop.scss";
import "./DashboardPage.scss";
import { LogOutComponent } from "../../components/LogOutComponent/LogOutComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../../config/firebase";

interface DashboardPageProps {
  user: any;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ user }) => {
  const showsArrayAppreciated: Array<showsProps> = [
    {
      id: 1,
      title: "Breaking Bad",
      src: "/BB.png",
      currentTime: 24,
      fullTime: 58,
      currentEpisode: "W róg",
    },
    {
      id: 2,
      title: "The Walking Dead",
      src: "/WD.png",
      currentTime: 0,
      fullTime: 48,
      currentEpisode: "Zombiki atakują",
    },
    {
      id: 3,
      title: "Viking",
      src: "/wiking.png",
      currentTime: 14,
      fullTime: 68,
      currentEpisode: "Laghertha przejmuje ster",
    },
    {
      id: 4,
      title: "Peaky Blinders",
      src: "/peakyB.png",
      currentTime: 24,
      fullTime: 58,
      currentEpisode: "Bloody...",
    },

    {
      id: 5,
      title: "The Office",
      src: "/office.png",
      currentTime: 4,
      fullTime: 58,
      currentEpisode: "Biurowe",
    },
    {
      id: 6,
      title: "Lucyfer",
      src: "/lucyfer.png",
      currentTime: 24,
      fullTime: 58,
      currentEpisode: "What is your desire?",
    },
    {
      id: 7,
      title: "Breaking Bad",
      src: "/BB.png",
      currentTime: 54,
      fullTime: 58,
      currentEpisode: "The fly",
    },
    {
      id: 8,
      title: "The Walking Dead",
      src: "/WD.png",
    },
    {
      id: 9,
      title: "Viking",
      src: "/wiking.png",
    },
    {
      id: 10,
      title: "Peaky Blinders",
      src: "/peakyB.png",
    },
    {
      id: 11,
      title: "The Office",
      src: "/office.png",
    },
    {
      id: 12,
      title: "Lucyfer",
      src: "/lucyfer.png",
    },
  ];

  const showsArrayPopularNow: Array<showsProps> = [
    {
      id: 1,
      title: "Peaky Blinders",
      src: "/peakyB.png",
    },
    {
      id: 2,
      title: "The Office",
      src: "/office.png",
    },
    {
      id: 3,
      title: "Breaking Bad",
      src: "/BB.png",
    },
    {
      id: 4,
      title: "The Office",
      src: "/office.png",
    },

    {
      id: 5,
      title: "Viking",
      src: "/wiking.png",
    },
    {
      id: 6,
      title: "Lucyfer",
      src: "/lucyfer.png",
    },
    {
      id: 7,
      title: "Breaking Bad",
      src: "/BB.png",
    },
    {
      id: 8,
      title: "The Walking Dead",
      src: "/WD.png",
    },
    {
      id: 9,
      title: "Viking",
      src: "/wiking.png",
    },
    {
      id: 10,
      title: "Peaky Blinders",
      src: "/peakyB.png",
    },
    {
      id: 11,
      title: "The Office",
      src: "/office.png",
    },
    {
      id: 12,
      title: "Lucyfer",
      src: "/lucyfer.png",
    },
  ];

  const showsArrayTopTenToday: Array<showsProps> = [
    {
      id: 1,
      title: "The Office",
      src: "/office.png",
      color: "gold",
    },
    {
      id: 2,
      title: "Breaking Bad",
      src: "/BB.png",
      color: "silver",
    },
    {
      id: 3,
      title: "The Walking Dead",
      src: "/WD.png",
      color: "bronze",
    },
    {
      id: 4,
      title: "Viking",
      src: "/wiking.png",
    },
    {
      id: 5,
      title: "Peaky Blinders",
      src: "/peakyB.png",
    },
    {
      id: 6,
      title: "Lucyfer",
      src: "/lucyfer.png",
    },
    {
      id: 7,
      title: "Breaking Bad",
      src: "/BB.png",
    },
    {
      id: 8,
      title: "The Office",
      src: "/office.png",
    },
    {
      id: 9,
      title: "The Walking Dead",
      src: "/WD.png",
    },
    {
      id: 10,
      title: "Viking",
      src: "/wiking.png",
    },
  ];

  const navigate = useNavigate();
  user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    } else {
      console.log("dash: ", user);
    }
      
  }, []);


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
          showsArray={showsArrayAppreciated}
          showsHeaderTitle={"Obejrzyj ponownie"}
        />
        <SwiperNoLoop
          showsArray={showsArrayTopTenToday}
          showsHeaderTitle={"Top 10 seriali w Polsce dzisiaj"}
        />
        <SwiperNoLoop
          showsArray={showsArrayTopTenToday}
          showsHeaderTitle={"Top 10 seriali na świecie dzisiaj"}
          />
          </div>
      <LogOutComponent />
    </div>
  );
};

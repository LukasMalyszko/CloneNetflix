// import React from "react"
import { Header } from "./components/Header/Header";
import { SwiperNoLoop } from "./components/Swipers/SwiperNoLoop";
import { SwiperLoop } from "./components/Swipers/SwiperLoop";
import { showsProps } from "./components/Swipers/Intetfaces";


export const DashboardPage = () => {
  const showsArrayAppreciated : Array<showsProps> = [
    {
      id: 1,
      title: "Breaking Bad",
      src: "/BB.png",
    },
    {
      id: 2,
      title: "The Walking Dead",
      src: "/WD.png",
    },
    {
      id: 3,
      title: "Viking",
      src: "/wiking.png",
    },
    {
      id: 4,
      title: "Peaky Blinders",
      src: "/peakyB.png",
    },

    {
      id: 5,
      title: "The Office",
      src: "/office.png",
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

  const showsArrayPopularNow : Array<showsProps> = [
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
  ]

  const showsArrayTopTenToday : Array<showsProps> = [
    {
      id: 1,
      title: "The Office",
      src: "/office.png",
      color: "gold"
    },
    {
      id: 2,
      title: "Breaking Bad",
      src: "/BB.png",
      color: "silver"
    },
    {
      id: 3,
      title: "The Walking Dead",
      src: "/WD.png",
      color: "bronze"
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
  ]

  return (
    <>
      <Header />

      <div className="swiper-container">
        <SwiperLoop showsArray={showsArrayAppreciated} showsHeaderTitle={"Docenione przez krytyków"} />
        <SwiperLoop showsArray={showsArrayPopularNow} showsHeaderTitle={"Popularne teraz"} />
        <SwiperLoop showsArray={showsArrayAppreciated} showsHeaderTitle={"Obejrzyj ponownie"} />
        <SwiperNoLoop showsArray={showsArrayTopTenToday} showsHeaderTitle={"Top 10 seriali w Polsce dzisiaj"}/>
        <SwiperNoLoop showsArray={showsArrayTopTenToday} showsHeaderTitle={"Top 10 seriali na świecie dzisiaj"}/>
      </div>
    </>
  );
};

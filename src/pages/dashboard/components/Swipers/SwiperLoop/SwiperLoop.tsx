import "./SwiperLoop.scss";
import "../hover-dropdown.scss";
import "../tooltip.scss";
import "swiper/scss";
import "react-tooltip/dist/react-tooltip.css";
import { Navigation } from "swiper";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactionButtons } from "../ReactionButtons";
import { updateDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../../../config/firebase";

export const SwiperLoop: any = ({
  showsArray,
  showsHeaderTitle,
}: {
  showsArray: Array<object>;
  showsHeaderTitle: string;
}) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [hideButton, setHideButton] = useState(true);
  const [tooltipId, setTooltipId] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const timeOnProgressBar = (currentTime: number, fullTime: number) => {
    let timeOnProgressBar = (currentTime / fullTime) * 100;
    return timeOnProgressBar;
  };

  const handleTooltip = (id: string) => {
    setTooltipId(id);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [watchedCounter, setWatchedCounter] = useState(1);

  const sendWatchedCounterToFirestore = async (documentId: string) => {
    try {
      const showDocumentRef = doc(db, `showsAppreciated/${documentId}`);

      const showDocumentSnapshot = await getDoc(showDocumentRef);
      if (showDocumentSnapshot.exists()) {
        await updateDoc(showDocumentRef, {
          watchedCounter: watchedCounter,
        });
        console.log("Zmienne zaktualizowane w Firestore");
      } else {
        await setDoc(showDocumentRef, {
          watchedCounter: watchedCounter,
        });
        console.log("dane wysłane");
      }
    } catch (error) {
      console.log("błąd wysyłania", error);
    }
  };

  return (
    <div className="swiper-component">
      <div className="swiper-component__header">
        <div className="swiper-component__header-title">{showsHeaderTitle}</div>
        <div className="swiper-component__header-link">
          <a href="#">Zobacz wszystkie</a>
          <div className="arrow-container">
            <img src="/arrow.svg" />
          </div>
        </div>
      </div>
      <Swiper
        className="swiper-component__slides"
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={"auto"}
        loop={true}
        allowSlidePrev={false}
        navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
        breakpoints={{
          0: {
            slidesOffsetBefore: 16,
          },
          616: {
            slidesOffsetBefore: 40,
          },
          834: {
            slidesOffsetBefore: 64,
          },
        }}
        slidesOffsetBefore={64}
        onSlideChange={() => {
          if (swiper) {
            swiper.allowSlidePrev = true;
          }
          setHideButton(false);
        }}
        onSwiper={setSwiper}
      >
        {showsArray.map((show: any, index: number) => {
          tooltipId;
          const showDocumentId = show.id;
          return (
            <SwiperSlide
              key={show.id}
              className="swiper-component__slide-container"
              onClick={() => {
                setWatchedCounter(show.watchedCounter + 1);
                sendWatchedCounterToFirestore(showDocumentId);
              }}
            >
              <img className="image" src={show.src} alt={show.title} />
              <div className="hover-dropdown">
                <div className="hover-dropdown__content">
                  <div className="hover-dropdown__buttons-container">
                    <div className="hover-dropdown__main-buttons">
                      <div className="hover-dropdown__icon-container play">
                        <img
                          src="/play.svg"
                          alt="play"
                          onClick={() => {
                            setWatchedCounter(show.watchedCounter + 1);
                            sendWatchedCounterToFirestore(showDocumentId);
                          }}
                        />
                      </div>

                      <div className="hover-dropdown__static-buttons">
                        <div className="hover-dropdown__icon-container add">
                          <img src="/add.svg" alt="add" />
                        </div>
                        <div
                          className="hover-dropdown__icon-container like"
                          onMouseOver={handleMouseOver}
                        >
                          <img src="/like.svg" alt="like" />
                        </div>
                        {isHovering && (
                          <ReactionButtons
                            index={index}
                            handleTooltip={handleTooltip}
                            onMouseOut={handleMouseOut}
                          />
                        )}
                      </div>
                    </div>
                    <div className="hover-dropdown__icon-container arrow">
                      <img src="/arrow.svg" alt="arrow" />
                    </div>
                  </div>
                  <div className="hover-dropdown__episode-container">
                    <div className="hover-dropdown__episode-current">
                      <div className="hover-dropdown__episode-name">
                        {show.currentEpisode}
                      </div>
                      <div className="hover-dropdown__episode-time">
                        {show.currentTime} z {show.fullTime} min
                      </div>
                    </div>
                    <div className="hover-dropdown__progress-bar">
                      <div
                        className="hover-dropdown__progress-time"
                        style={{
                          width: `${timeOnProgressBar(
                            show.currentTime,
                            show.fullTime
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div
          className={`button button-prev ${hideButton ? "button-hide" : ""} `}
        >
          <div className="arrow-container">
            <img src="/arrow.svg" />
          </div>
        </div>
        <div className="button button-next">
          <div className="arrow-container">
            <img src="/arrow.svg" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

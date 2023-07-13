import "../Swipers/SwiperLoop.scss";
import "../Swipers/hover-dropdown.scss";
import { Tooltip } from "react-tooltip";
import "../Swipers/tooltip.scss";
import "react-tooltip/dist/react-tooltip.css";
import { Navigation } from "swiper";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

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

  const timeOnProgressBar = (currentTime: number, fullTime: number) => {
    let timeOnProgressBar = (currentTime / fullTime) * 100;
    return timeOnProgressBar;
  };

  const handleTooltip = (id: string) => {
    setTooltipId(id);
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
          return (
            <SwiperSlide
              key={show.id}
              className="swiper-component__slide-container"
            >
              <img className="image" src={show.src} alt={show.title} />
              <div className="hover-dropdown">
                <div className="hover-dropdown__content">
                  <div className="hover-dropdown__buttons-container">
                    <div className="hover-dropdown__main-buttons">
                      <div className="hover-dropdown__icon-container play">
                        <img src="/play.svg" alt="play" />
                      </div>

                      <div className="hover-dropdown__static-buttons">
                        <div className="hover-dropdown__reaction-buttons">
                          <div className="hover-dropdown__icon-container ">
                            <img src="/add.svg" alt="play" />
                          </div>
                          <div className="hover-dropdown__icon-container ">
                            <img src="/add.svg" alt="play" />
                          </div>
                          <div className="hover-dropdown__icon-container ">
                            <img src="/add.svg" alt="play" />
                          </div>
                        </div>
                        <div className="hover-dropdown__icon-container add">
                          <img src="/add.svg" alt="add" />
                        </div>
                        <div className="test">aaaaa</div>
                        <div
                          className="hover-dropdown__icon-container like"
                          onMouseEnter={() => handleTooltip(`tooltip-${index}`)}
                          onMouseLeave={() => handleTooltip("")}
                          data-tooltip-id={`tooltip-${index}`}
                          data-tooltip-content="Podoba mi się"
                        >
                          <img src="/like.svg" alt="like" />
                          <Tooltip
                            id={`tooltip-${index}`}
                            className="tooltip tooltip--custom"
                          />
                        </div>
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

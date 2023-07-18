import { Navigation } from "swiper";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { showsProps } from "../Intetfaces";

export const SwiperNoLoop: any = ({
  showsArray,
  showsHeaderTitle,
}: {
  showsArray: Array<showsProps>;
  showsHeaderTitle: string;
}) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [hideButtonPrev, setHideButtonPrev] = useState(true);
  const [hideButtonNext, setHideButtonNext] = useState(false);

  return (
    <div className="swiper-component">
      <div className="swiper-component__header">
        <div className="swiper-component__header-title">{showsHeaderTitle}</div>
      </div>
      <Swiper
        className="swiper-component__slides-rated"
        modules={[Navigation]}
        spaceBetween={56}
        slidesPerView={"auto"}
        allowSlidePrev={false}
        navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
        breakpoints={{
          0: {
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            spaceBetween: 24,
          },
          616: {
            slidesOffsetBefore: 40,
            slidesOffsetAfter: 40,
          },
          834: {
            slidesOffsetBefore: 64,
            slidesOffsetAfter: 64,
          },
        }}
        onSlideChange={() => {
          if (swiper) {
            swiper.allowSlidePrev = true;
            const currentIndex = swiper.realIndex;
            setHideButtonPrev(false);

            if (currentIndex === 0) {
              setHideButtonPrev(true);
            }
          }
        }}
        onReachEnd={() => {
          setHideButtonNext(true);
        }}
        onSwiper={setSwiper}
      >
        {showsArray.map((show) => {
          return (
            <SwiperSlide
              key={show.id}
              className="swiper-component__review-slide-container"
            >
              <div
                className={`swiper-component__review-container ${
                  show.id === 1
                    ? "gold"
                    : show.id === 2
                    ? "silver"
                    : show.id === 3
                    ? "bronze"
                    : ""
                }`}
              >
                {show.id}
              </div>
              <div className="swiper-component__img-container">
                <img src={show.src} alt={show.title} />
              </div>
            </SwiperSlide>
          );
        })}

        <div
          className={`button button-prev ${
            hideButtonPrev ? "button-hide" : ""
          } `}
        >
          <div className="arrow-container">
            <img src="/arrow.svg" />
          </div>
        </div>
        <div
          className={`button button-next ${
            hideButtonNext ? "button-hide" : ""
          } `}
        >
          <div className="arrow-container">
            <img src="/arrow.svg" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

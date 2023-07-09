import "../Swipers/SwiperLoop.scss";
import "../Swipers/hover-dropdown.scss";
import { Navigation} from "swiper";
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
        {showsArray.map((show: any) => {
          return (
            <SwiperSlide
              key={show.id}
              className="swiper-component__slide-container"
            >
              <img src={show.src} alt={show.title} />
              <div className="hover-dropdown">
                
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

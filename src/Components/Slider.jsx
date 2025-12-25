import "../Style/Slider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function Slider() {
  const FirstSlider = [
    { id: 1, src: "../images/card-large-item2.jpg" },
    { id: 2, src: "../images/card-large-item1.jpg" },
    { id: 3, src: "../images/card-large-item3.jpg" },
  ];
  const SecondSwiper = [
    { id: 1, src: "../images/card-large-item1.jpg" },
    { id: 2, src: "../images/card-large-item2.jpg" },
    { id: 3, src: "../images/card-large-item3.jpg" },
  ];
  const ThirdSwiper = [
    { id: 1, src: "../images/card-large-item3.jpg" },
    { id: 2, src: "../images/card-large-item1.jpg" },
    { id: 3, src: "../images/card-large-item2.jpg" },
  ];
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      className="slider-container"
    >
      <SwiperSlide>
        <div className="slide-grid">
          <div className="slide-left">
            <img src ={FirstSlider[0].src} alt="Slide 1 left" />
          </div>
          <div className="slide-right">
            <img src ={FirstSlider[1].src} alt="Slide 1 top-right" />
            <img src ={FirstSlider[2].src} alt="Slide 1 bottom-right" />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-grid">
          <div className="slide-left">
            <img src ={SecondSwiper[0].src} alt="Slide 2 left" />
          </div>
          <div className="slide-right">
            <img src ={SecondSwiper[1].src} alt="Slide 2 top-right" />
            <img src ={SecondSwiper[2].src} alt="Slide 2 bottom-right" />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-grid">
          <div className="slide-left">
            <img src ={ThirdSwiper[0].src} alt="Slide 3 left" />
          </div>
          <div className="slide-right">
            <img src ={ThirdSwiper[1].src} alt="Slide 3 top-right" />
            <img src ={ThirdSwiper[2].src} alt="Slide 3 bottom-right" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;

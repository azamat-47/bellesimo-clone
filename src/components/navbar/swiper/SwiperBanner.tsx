import { type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./swiperStyles.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import slide_1 from "../../../assets/swiper/slide_1.webp";
import slide_2 from "../../../assets/swiper/slide_2.webp";
import slide_3 from "../../../assets/swiper/slide_3.webp";
import slide_4 from "../../../assets/swiper/slide_4.webp";
import slide_5 from "../../../assets/swiper/slide_5.webp";

// Test slayd rasmi (o‘rniga o‘zingizning rasmlarni qo‘ying)
const slides = [
    slide_1,
    slide_2,
    slide_3,
    slide_4,
    slide_5,
];

const SwiperBanner: FC = () => {
  return (
    <div className="w-full pb-6">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 1.3, // 1.3 = slaydlar chekkadan ko‘rinadi
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {slides.map((img, index) => (
          <SwiperSlide
            key={index}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img src={img} alt={`slide-${index}`} className="w-full h-auto object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBanner;

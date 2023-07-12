import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { styled } from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: 100% !important;
  max-height: 70vh !important;
  border-radius: 5px;
`;

const Slider = ({ imageArray }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {imageArray?.map((element, i) => (
        <SwiperSlide key={i}>
          <Image src={imageArray[i]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

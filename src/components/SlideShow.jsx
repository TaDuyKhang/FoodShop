import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/swiper.min.css';
import "../styles/SlideShow.css";
function SlideShow() {

    return(
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src="/picture/ms_banner_img1.webp" alt="" className="img_slide" /></SwiperSlide>
        <SwiperSlide><img src="/picture/ms_banner_img2.webp" alt="" className="img_slide" /></SwiperSlide>
        <SwiperSlide><img src="/picture/ms_banner_img3.webp" alt="" className="img_slide" /></SwiperSlide>
        <SwiperSlide><img src="/picture/ms_banner_img4.webp" alt="" className="img_slide" /></SwiperSlide>
        
      </Swiper>
    );
}

export default SlideShow;

// import React from 'react';
// import Swiper from 'react-id-swiper';
// const SlideShow = () => {
//   const params = {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     }
//   }
//   return (
//     <Swiper {...params}>
//       <div><img src="/picture/ms_banner_img1.webp" alt="" className="img_slide" /></div>
//       <div><img src="/picture/ms_banner_img3.webp" alt="" className="img_slide" /></div>
//       <div><img src="/picture/ms_banner_img4.webp" alt="" className="img_slide" /></div>
//       <div><img src="/picture/ms_banner_img2.webp" alt="" className="img_slide" /></div>
//       <div><img src="/picture/ms_banner_img3.webp" alt="" className="img_slide" /></div>
//     </Swiper>
//   )
// };
// export default SlideShow;
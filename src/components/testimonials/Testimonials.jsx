import React from 'react'
import "./testimonials.css";
import {Data} from "./Data";

// import "swiper/css";
const Testimonials = () => {
  return (
    <section className="testimonial container section">
    <h2 className="section_title">My Clients Remarks</h2>
    <span className="section_subtitle">Testimonial</span>

    <Swiper className="testimonial_container" 
    // loop={true}
    // grabCursor={true}
    // spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        {Data.map(({id, image, title, description}) => {
            return (
                <SwiperSlide className='testimonial_card' key={id}>
                    <img src={image} className='testimonial_img' />

                    <h3 className="testimonial_name">{title}</h3>
                    <p className="testimonial_description">{description}</p>
                </SwiperSlide>
            )
        })}
    </Swiper>
    </section>
  );
};

export default Testimonials;
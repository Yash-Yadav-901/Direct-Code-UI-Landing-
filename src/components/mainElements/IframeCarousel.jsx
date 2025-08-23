import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./IframeCarousel.css";

const iframeSources = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
];

export default function IframeCarousel() {
    return (
        <div className="carousel-container">
            <Swiper

                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="semiCircleSwiper"
            >
                {iframeSources.map((src, index) => (
                    <SwiperSlide key={index} className="iframe-slide">
                        <iframe
                            src={src}
                            title={`iframe-${index}`}
                            width="300"
                            height="200"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

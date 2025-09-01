import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { SparklesIcon } from "lucide-react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
    Autoplay,
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules"

export const CardCarousel = ({
    images,
    autoplayDelay = 1500,
    showPagination = true,
    showNavigation = true,
}) => {
    const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      border-radius: 12px;
    }

    .swiper-3d .swiper-slide-shadow-left,
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }

    .badge {
      position: absolute;
      top: 24px;
      left: 16px;
      padding: 6px 12px;
      border-radius: 14px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background: white;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
  `

    return (
        <section style={{ padding: "2rem 0" }}>
            <style>{css}</style>
            <div style={{ maxWidth: "1024px", margin: "0 auto", position: "relative" }}>

                {/* <div style={{ paddingTop: "80px", paddingBottom: "20px", textAlign: "center" }}>
                    <h3 style={{ fontSize: "2rem", fontWeight: "bold", opacity: 0.85 }}>
                        Card Carousel
                    </h3>
                    <p>Seamless Images carousel animation.</p>
                </div> */}

                <Swiper
                    spaceBetween={50}
                    autoplay={{
                        delay: autoplayDelay,
                        disableOnInteraction: false,
                    }}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={showPagination}
                    navigation={
                        showNavigation
                            ? {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }
                            : undefined
                    }
                    modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div style={{ width: "300px", height: "300px", borderRadius: "12px", overflow: "hidden" }}>
                                <iframe
                                    src={image.src}
                                    width="100%"
                                    height="110%"
                                    style={{ border: "none" }}
                                />
                            </div>
                        </SwiperSlide>

                    ))}
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div style={{ width: "300px", height: "300px", borderRadius: "12px", overflow: "hidden" }}>
                                <iframe
                                    src={image.src}

                                    width="100%"
                                    height="110%"
                                    style={{ border: "none" }}
                                />
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </section>
    )
}

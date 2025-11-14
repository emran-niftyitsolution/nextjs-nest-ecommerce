'use client';

import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';

interface GalleryItem {
    thumb: string;
}

interface Product {
    gallery?: GalleryItem[];
}

interface ThumbSliderProps {
    product: Product;
}

const ThumbSlider: React.FC<ThumbSliderProps> = ({ product }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div>
            <Swiper
                modules={[Navigation, Thumbs]}
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                } as React.CSSProperties}
                
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
            >
                {(product.gallery || []).map((item, i) => (
                    <SwiperSlide key={i}>
                        <img src={item.thumb} alt="Product gallery" />
                        {/* <Zoom
                            img={item.thumb}
                            zoomScale={5}
                            width={500}
                            height={500}
                            ransitionTime={0.5}
                        /> */}
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
            >
                {(product.gallery || []).map((item, i) => (
                    <SwiperSlide key={i}>
                        <img src={item.thumb} alt="Product thumbnail" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ThumbSlider;


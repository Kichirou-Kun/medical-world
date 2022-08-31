import React from 'react'
import "./banner.css"
import 'swiper/css';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';


const BannerWrapper = (props) => {
    return (
        <>
            {/* Show Desktop Tablet */}
            <div className={`${props.className} w-full`}>
                <div className='container  md:px-16 py-2 px-8'>
                    <Swiper
                        modules={[Navigation, Pagination, EffectFade, Autoplay]}
                        navigation
                        effect={'fade'}
                        speed={800}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        loop
                        autoplay={{ delay: 3000 }}
                    > {props.children}
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default BannerWrapper

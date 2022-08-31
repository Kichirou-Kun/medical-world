import React from 'react'
import Title from '../title/Title'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { promotions1, promotions2 } from '../../../data';
import styles from "./promotions.module.css"

const Promotions = () => {
    return (
        <section className='section bg-white'>
            <div className='container md:px-16 px-8'>
                <Title title="promotions" />
                {/* First Slider */}
                <div className='mb-4'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        modules={Navigation}
                    >
                        {promotions1.map((promo, index) => (<SwiperSlide key={index} className={styles.promotions_slice}>
                            <img src={promo.image} alt="promotion" className='h-150 object-cover w-225 rounded-lg' />
                        </SwiperSlide>))}

                    </Swiper>
                </div>
                {/* Second Slider */}
                <div className='mb-4'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        modules={Navigation}
                    >
                        {promotions2.map((promo, index) => (<SwiperSlide key={index} className={styles.promotions_slice}>
                            <img src={promo.image} alt="promotion" className='h-120 object-cover w-225 rounded-lg' />
                        </SwiperSlide>))}

                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Promotions

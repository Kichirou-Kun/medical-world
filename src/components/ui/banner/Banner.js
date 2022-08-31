import React from 'react'
import { SwiperSlide } from 'swiper/react';
import { mobileBanners, webBanners } from '../../../data';
import BannerWrapper from './BannerWrapper';

const BannerItem = () => {
    return (
        <>
            <BannerWrapper className="md:flex hidden">
                <>
                    {webBanners.map((item, index) => {
                        return <SwiperSlide key={index}>
                            <img src={item.image} alt="banner_ads" className='object-cover w-full' />
                        </SwiperSlide>
                    })}
                </>
            </BannerWrapper>
            <BannerWrapper className="md:hidden flex ">
                <>
                    {mobileBanners.map((item, index) => {
                        return <SwiperSlide key={index}>
                            <img src={item.image} alt="banner_ads" />
                        </SwiperSlide>
                    })}
                </>
            </BannerWrapper>
        </>
    )
}

export default BannerItem

import React from 'react'
import { SwiperSlide } from 'swiper/react';
import { mobileBannerAds, webBannerAds } from '../../../data';
import BannerWrapper from '../banner/BannerWrapper';


const BannerAds = () => {
    return (
        <>
            <BannerWrapper className="md:flex hidden">
                <>
                    {webBannerAds.map((item, index) => {
                        return <SwiperSlide key={index}>
                            <img src={item.image} alt="banner_ads" className='object-cover w-full' />
                        </SwiperSlide>
                    })}
                </>
            </BannerWrapper>
            <BannerWrapper className="md:hidden flex ">
                <>
                    {mobileBannerAds.map((item, index) => {
                        return <SwiperSlide key={index}>
                            <img src={item.image} alt="banner_ads" />
                        </SwiperSlide>
                    })}
                </>
            </BannerWrapper>
        </>
    )
}

export default BannerAds

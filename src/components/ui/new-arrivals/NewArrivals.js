import React from 'react'
import { SwiperSlide } from 'swiper/react';
import MedicalCard from '../medical-card/MedicalCard';
import { newArrivals } from '../../../data';
import ProductLayout from '../product-layout/ProductLayout';

const NewArrivals = () => {
    return (<ProductLayout title="New Arrivals" className="bg-bodyBg">
        {newArrivals.map((item, index) => (
            <SwiperSlide key={index} className="product_slice">
                <MedicalCard item={item} className="bg-white" />
            </SwiperSlide>
        ))}
    </ProductLayout>


    )
}

export default NewArrivals
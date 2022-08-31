import React from 'react'
import { SwiperSlide } from 'swiper/react';
import MedicalCard from '../medical-card/MedicalCard';
import { newArrivals } from '../../../data';
import ProductLayout from '../product-layout/ProductLayout';
import img from "../../../assets/categories/first-aid-bag.png"

const FamilyHospital = () => {
    return (<ProductLayout title="family hospital uniform" image={img} className="bg-bodyBg">
        {newArrivals.map((item, index) => (
            <SwiperSlide key={index} className="product_slice">
                <MedicalCard item={item} className="bg-white" />
            </SwiperSlide>
        ))}
    </ProductLayout>


    )
}

export default FamilyHospital
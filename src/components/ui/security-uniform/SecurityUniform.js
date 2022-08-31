import React from 'react'
import { SwiperSlide } from 'swiper/react';
import MedicalCard from '../medical-card/MedicalCard';
import { newArrivals } from '../../../data';
import ProductLayout from '../product-layout/ProductLayout';
import accessorieImage from "../../../assets/categories/prescription.png"

const SecurityUniform = () => {
    return (<ProductLayout title="Security Uniform" image={accessorieImage} className="bg-bodyBg">
        {newArrivals.map((item, index) => (
            <SwiperSlide key={index} className="product_slice">
                <MedicalCard item={item} className="bg-white" />
            </SwiperSlide>
        ))}
    </ProductLayout>


    )
}

export default SecurityUniform
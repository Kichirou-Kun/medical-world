import React from 'react'
import { SwiperSlide } from 'swiper/react';
import MedicalCard from '../medical-card/MedicalCard';
import { newArrivals } from '../../../data';
import ProductLayout from '../product-layout/ProductLayout';
import img from "../../../assets/categories/blood-test.png"

const FamilyUnform = () => {
    return (<ProductLayout title="family uniform" image={img} className="bg-bodyBg">
        {newArrivals.map((item, index) => (
            <SwiperSlide key={index} className="product_slice">
                <MedicalCard item={item} className="bg-white" />
            </SwiperSlide>
        ))}
    </ProductLayout>


    )
}

export default FamilyUnform
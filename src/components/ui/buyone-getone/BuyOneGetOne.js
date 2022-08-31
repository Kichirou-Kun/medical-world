import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { newArrivals } from '../../../data'
import MedicalCard from '../medical-card/MedicalCard'
import ProductLayout from '../product-layout/ProductLayout'

const BuyOneGetOne = () => {
    return (
        <ProductLayout title="buy1 get1" className="bg-white">
            {newArrivals.map((item, index) => (
                <SwiperSlide key={index} className="product_slice">
                    <MedicalCard item={item} className="bg-bodyBg" />
                </SwiperSlide>
            ))}
        </ProductLayout>
    )
}

export default BuyOneGetOne
import React from 'react'
import Title from '../title/Title';
import 'swiper/css';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const ProductLayout = (props) => {
    return (
        <section className={`section ${props.className}`}>
            <div className='container md:px-16 p-2 px-8'>
                <Title title={props.title} image={props.image} />
                <>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        modules={Navigation}
                    >
                        {props.children}
                    </Swiper>
                </>
            </div>
        </section>
    )
}

export default ProductLayout
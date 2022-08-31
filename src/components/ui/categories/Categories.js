import { categories } from "../../../data";
import Title from "../title/Title";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styles from "./category.module.css";

const Categories = () => {
    return <section className="section">
        <div className="container mx:px-16 p-6 px-8">
            <Title title="categories" />

            <div className="cat-list">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    modules={Navigation}
                >
                    {categories.map((cat, index) => (
                        <SwiperSlide key={index} className={styles.category_slice}>
                            <div className="bg-white rounded-lg h-120 mx-auto w-100 py-4 px-8 flex flex-col items-center cursor-pointer">
                                <img src={cat?.image} alt="category" className="w-32 h-32 object-contain" />
                                <h1 className="text-center lg:text-sm text-xs text-mainColor font-semibold mt-3">{cat?.text}</h1>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    </section>
}

export default Categories;
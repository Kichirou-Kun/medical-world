import { SwiperSlide } from "swiper/react"
import bgImage from "../../../assets/icons/rewards_BG.png"
import { newArrivals } from "../../../data"
import MedicalCard from "../medical-card/MedicalCard"
import ProductLayout from "../product-layout/ProductLayout"
const Reward = () => {
    return <div className="text-white" style={{ backgroundImage: `url(${bgImage})` }}>
        <ProductLayout title="Rewards">
            {newArrivals.map((item, index) => (
                <SwiperSlide key={index} className="product_slice">
                    <MedicalCard btntitle={false} item={item} className="bg-white" />
                </SwiperSlide>
            ))}

        </ProductLayout>
    </div>
}
export default Reward
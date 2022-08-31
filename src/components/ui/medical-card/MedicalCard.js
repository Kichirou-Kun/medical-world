import React from 'react';
import plusIcon from "../../../assets/icons/add.svg";
import minusIcon from "../../../assets/icons/minus.svg";
import heartIcon from "../../../assets/icons/favourited.png";
import lightHeartIcon from "../../../assets/icons/favourite.png";
import minusLight from "../../../assets/icons/minus_LIGHT.png";
import buttonBg from "../../../assets/icons/Rectangle_49.png";
import addToCartText from "../../../assets/icons/Add_to_Cart.png";
import rewardBtn from "../../../assets/icons/Group_14.png";

const MedicalCard = ({ item, btntitle = true, className }) => {
    return (
        <article className={`${className} cursor-pointer w-full overflow-hidden rounded-lg text-center`}>
            <div className='relative h-150 w-full '>
                <img src={item.image} className="h-full w-full object-cover" alt={item.title} />

                {item.amount > 0 ? <img src={heartIcon} alt="haert_icon" className='absolute top-2 right-2 w-6' /> : <img src={lightHeartIcon} alt="light_haert_icon" className='absolute top-2 right-2 w-6' />}


            </div>
            <div className='px-2 py-4'>
                <h3 className="font-bold text-md text-textColor">{item.title}</h3>
                <h3 className="text-mainColor text-sm font-semibold my-2">{item.price}</h3>
                <div className='flex items-center justify-between mx-auto sm:w-60% '>
                    {item.amount > 0 ? <img src={minusLight} className='cursor-pointer w-6' alt="plusIcon" /> : <img src={minusIcon} alt="minusIcon" className='cursor-pointer w-6' />}

                    <input onChange={() => { }} type="text" className='w-40 placeholder:text-sm text-sm px-2' value={item.amount} />
                    <img src={plusIcon} alt="plusIcon" className='cursor-pointer w-6' />
                </div>
                <div className='mx-auto text-center mt-4 flex justify-center relative'>
                    {btntitle ? <><img src={buttonBg} alt="addToCat_bg" />
                        <img src={addToCartText} alt="addToCat_text" className='absolute top-2 -left-50' /></> : <img src={rewardBtn} alt="reward_btm" />}

                </div>
            </div>
        </article>
    )
}

export default MedicalCard
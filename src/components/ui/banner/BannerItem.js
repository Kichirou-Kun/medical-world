import React from 'react'

const BannerItem = ({ banner }) => {
    let image = banner?.image;
    return (
        <img src={image} alt="banner" className='w-full object-cover' />
    )
}

export default BannerItem

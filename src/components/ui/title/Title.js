import React from 'react'

const Title = (props) => {
    return (
        <div className='flex items-center justify-center mb-8'>
            {props?.image && <img className='md:w-6 w-4 mr-2' src={props?.image} alt="category_image" />}

            <h1 className='lg:text-3xl md:2xl xl font-bold text-center capitalize'>{props.title}</h1>
        </div>
    )
}

export default Title

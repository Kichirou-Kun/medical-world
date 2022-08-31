import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-mainColor sectioin text-white'>
                <div className='container md:px-16 p-6 px-6 footer'>
                    <div className='footer-item'>
                        <h1 className='font-semibold mb-2 capitalize'>Customer Dervice</h1>
                        <p>Term & Pravicy Policy</p>
                        <p>return Policy</p>
                    </div>
                    <div className='footer-item'>
                        <h1 className='font-semibold mb-2 capitalize'>Language</h1>
                        <p>Myanmar (Unicode)</p>
                        <p>Myanmar (Zawgyi)</p>
                        <p>. English</p>
                    </div>
                    <div className='footer-item'>
                        <h1 className='font-semibold mb-2 capitalize'>Contact Us</h1>
                        <p>+959448833467</p>
                        <p>No.6, Marlar Myaing 4th Street, 16th Ward, Hlaing Township, Yangon, Myanmar</p>
                    </div>
                </div>

            </footer >
            <div className=' bg-blue-500 w-full py-2 reserved text-white capitalize md:px-16 px-6 text-center'>All right reserved. Made With All The love in shopdoora Co,Ltd.</div>
        </>
    )
}

export default Footer

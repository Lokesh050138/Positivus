import React from 'react'
import CircularGallery from './CircularGallery'

const Circular = () => {
    return (
        <>
            <div className=" bg-blue-950 py-30">
                <div className='h-[600px] relative'>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 uppercase text-white">
                        Creative <span className="text-white p-4 bg-accent rounded-full">Design </span>
                    </h2>
                    <CircularGallery bend={1} textColor="#ffff" borderRadius={0.05} scrollEase={0.02} />
                </div>
            </div>
        </>
    )
}

export default Circular

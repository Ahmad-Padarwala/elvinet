import React from 'react';
import Whitelogo from '../../assets/image/whitelogo.png';
import DetailMask from '../../assets/image/detail-mask.png';

const DetailSection = () => {
    return (
        <section className="relative bg-[linear-gradient(110deg,#4F2A28_36%,#A79493_10%)] overflow-hidden min-h-[400px] h-screen sm:min-h-[500px] lg:min-h-[550px] py-[clamp(20px,5vw,50px)] px-[clamp(20px,5vw,50px)]">
            <div className='absolute sm:bottom-[-30px] bottom-[30%] sm:left-1/3 left-[40%] -translate-x-1/2 z-50'>
                <img
                    src={DetailMask}
                    alt="Detail Mask"
                    className='w-[300px] sm:w-[400px] lg:w-[500px] z-50 object-cover pointer-events-none'
                />
            </div>

            <div className="flex flex-grow flex-col z-50 sm:flex-row min-h-full justify-between gap-y-10 items-end">
                <div className="text-center z-50 sm:text-left place-self-start">
                    <img src={Whitelogo} alt="Logo" className="w-[150px] sm:w-[180px] md:w-[200px] mx-auto sm:mx-0" />
                    <p className='text-[10px] sm:text-[12px] md:text-[13px] text-white font-[700] mt-2'>
                        ELECTRICAL ACCESSORIES
                    </p>
                </div>
                <div className='relative z-50  place-item-end'>
                    <h1 className='font-[800] text-textred1 text-[clamp(20px,5vw,45px)] leading-tight'>
                        LOREM IPSUM <br />
                        <span className='text-white'>DOLOR SIT</span><br />
                        AMET CONSECTETUR
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default DetailSection;
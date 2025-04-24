import React from 'react';
import Whitelogo from '../../assets/image/whitelogo1.png';
import GallerySwitch1 from '../../assets/image/galleryswitch1.png';
import GallerySwitch3 from '../../assets/image/galleryswitch3.png';
import GallerySwitch4 from '../../assets/image/galleryswitch4.png';
import GallerySwitch5 from '../../assets/image/galleryswitch5.png';

const Gallery = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {/* Block 1 */}
            <div className='py-4 flex flex-col justify-between items-center overflow-hidden bg-[#DDCFD2]'>
                <div className='w-fit place-content-center'>
                    <img src={Whitelogo} alt="Logo" className="mx-auto" />
                    <p className='text-[6px] text-white font-[700] mt-1'>ELECTRICAL ACCESSORIES</p>
                </div>
                <div className='h-[350px] flex items-center justify-center'>
                    <img src={GallerySwitch1} alt="Gallery Switch" className='w-full relative left-[60px] object-cover' />
                </div>
                <div className='text-center'>
                    <p className='font-[700] text-[15px] text-white uppercase'>Lorem Ipsum</p>
                </div>
            </div>

            {/* Block 2 */}
            <div className='py-4 flex flex-col justify-between items-center overflow-hidden bg-[#EDD8BB]'>
                <div className='w-fit place-content-center'>
                    <img src={Whitelogo} alt="Logo" className="mx-auto" />
                    <p className='text-[6px] text-white font-[700] mt-1'>ELECTRICAL ACCESSORIES</p>
                </div>
                <div className='h-[350px] flex items-center justify-center'>
                    <img src={GallerySwitch1} alt="Gallery Switch" className='w-full relative left-[60px] object-cover' />
                </div>
                <div className='text-center'>
                    <p className='font-[700] text-[15px] text-white uppercase'>Lorem Ipsum</p>
                </div>
            </div>

            {/* Block 3 */}
            <div className='py-4 flex flex-col justify-between items-center overflow-hidden bg-[#FDECEA]'>
                <div className='w-fit place-content-center'>
                    <img src={Whitelogo} alt="Logo" className="mx-auto" />
                    <p className='text-[6px] text-white font-[700] mt-1'>ELECTRICAL ACCESSORIES</p>
                </div>
                <div className='h-[350px] flex items-center justify-center'>
                    <img src={GallerySwitch3} alt="Gallery Switch" className='w-full relative left-[20px] object-cover' />
                </div>
                <div className='text-center'>
                    <p className='font-[700] text-[15px] text-white uppercase'>Lorem Ipsum</p>
                </div>
            </div>

            {/* Block 4 */}
            <div className='py-4 flex flex-col justify-between items-center overflow-hidden bg-[#654E42]'>
                <div className='w-fit place-content-center'>
                    <img src={Whitelogo} alt="Logo" className="mx-auto" />
                    <p className='text-[6px] text-white font-[700] mt-1'>ELECTRICAL ACCESSORIES</p>
                </div>
                <div className='h-[350px] flex items-center justify-center'>
                    <img src={GallerySwitch4} alt="Gallery Switch" className='w-full relative left-[20px] object-cover' />
                </div>
                <div className='text-center'>
                    <p className='font-[700] text-[15px] text-white uppercase'>Lorem Ipsum</p>
                </div>
            </div>

            {/* Block 5 */}
            <div className='py-4 flex flex-col justify-between items-center overflow-hidden bg-[#55636D]'>
                <div className='w-fit place-content-center'>
                    <img src={Whitelogo} alt="Logo" className="mx-auto" />
                    <p className='text-[6px] text-white font-[700] mt-1'>ELECTRICAL ACCESSORIES</p>
                </div>
                <div className='h-[350px] flex items-center justify-center'>
                    <img src={GallerySwitch5} alt="Gallery Switch" className='w-full object-cover' />
                </div>
                <div className='text-center'>
                    <p className='font-[700] text-[15px] text-white uppercase'>Lorem Ipsum</p>
                </div>
            </div>
        </section>
    )
}

export default Gallery;

import React, { useState } from 'react';
import Slider from 'react-slick';
import Whitelogo from '../../assets/image/whitelogo1.png';
import GallerySwitch1 from '../../assets/image/galleryswitch1.png';
import GallerySwitch2 from '../../assets/image/galleryswitch2.png';
import GallerySwitch3 from '../../assets/image/galleryswitch3.png';
import GallerySwitch4 from '../../assets/image/galleryswitch4.png';
import GallerySwitch5 from '../../assets/image/galleryswitch5.png';

const galleryData = [
    { id: 1, img: GallerySwitch1, bg: '#DDCFD2' },
    { id: 2, img: GallerySwitch2, bg: '#EDD8BB' },
    { id: 3, img: GallerySwitch3, bg: '#FDECEA' },
    { id: 4, img: GallerySwitch4, bg: '#654E42' },
    { id: 5, img: GallerySwitch5, bg: '#55636D' },
];

const Gallery = () => {
    const [hovered, setHovered] = useState(null);
    const settings = {
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        speed: 500,
        focusOnSelect: true,
        arrows: true,
    };

    return (
        <section className="w-full">
            <div className="hidden lg:flex group w-full overflow-hidden">
                {galleryData.map((item, index) => {
                    const isActive = hovered === null ? index === 0 : hovered === index;

                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setHovered(index)}
                            className={`relative transition-all duration-700 ease-in-out cursor-pointer flex flex-col justify-between items-center ${isActive ? 'flex-[1.5]' : 'flex-[1] brightness-[0.4]'}`}
                            style={{ backgroundColor: item.bg }}
                        >
                            <div className={`absolute inset-0 transition-all duration-300 ${isActive ? 'bg-transparent' : 'bg-black/50'} z-10`} />
                            <div className="relative z-50 p-4 text-center">
                                <img src={Whitelogo} alt="Logo" className="mx-auto" />
                                <p className="text-[6px] text-white font-[700] mt-1">ELECTRICAL ACCESSORIES</p>
                            </div>

                            <div className="relative z-20 h-[350px] flex items-center justify-center">
                                <img
                                    src={item.img}
                                    alt="Gallery Switch"
                                    className="w-full object-cover"
                                />
                            </div>

                            <div className="relative z-20 text-center mb-4">
                                <p className="font-[700] text-[15px] text-white uppercase">Lorem Ipsum</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Mobile View */}
            <div className="lg:hidden overflow-hidden w-full">
                <Slider {...settings}>
                    {galleryData.map((item) => (
                        <div
                            key={item.id}
                            className={`relative transition-all duration-500 ease-in-out bg-[${item.bg}] cursor-pointer flex flex-col justify-between items-center`}
                        >
                            <div className="absolute z-10" />
                            <div className="relative z-50 p-4 text-center">
                                <img src={Whitelogo} alt="Logo" className="mx-auto" />
                                <p className="text-[6px] text-white font-[700] mt-1">ELECTRICAL ACCESSORIES</p>
                            </div>
                            <div className="relative z-20 h-[250px] flex items-center justify-center">
                                <img
                                    src={item.img}
                                    alt="Gallery Switch"
                                    className="object-cover w-[200px]"
                                />
                            </div>
                            <div className="relative z-20 text-center mb-4">
                                <p className="font-[700] text-[15px] text-white uppercase">Lorem Ipsum</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Gallery;

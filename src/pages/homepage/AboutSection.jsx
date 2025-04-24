import React from 'react';
import AboutImage from '../../assets/image/about.png';

const AboutSection = () => {
    return (
        <section className="bg-[#EAEEEA] sm:flex">
            {/* Image Section */}
            <div className='sm:w-1/2 w-full'>
                <img src={AboutImage} alt="About Us" className='w-full h-full object-cover' />
            </div>

            {/* Text Section */}
            <div className="w-full sm:w-1/2 p-[clamp(2rem,5vw,4rem)]">
                <div className="flex flex-row sm:flex-row items-center">
                    <p className="text-[clamp(18px,2vw,20px)] md:w-[123px] sm:w-[160px] w-[123px] font-semibold text-[#85878B]">
                        ABOUT US.
                    </p>
                    <div className="h-[3px] md:w-[calc(100%-123px)] msm:w-[calc(100%-160px)] w-[calc(100%-123px)] sm:w-[300px] bg-[#D8D9DA]" />
                </div>

                <p className="text-[clamp(14px,2vw,16px)] leading-[1.8] font-normal mt-6 text-desctext uppercase">
                    Lorem Ipsum Dolor Sit Amet, Consectetur
                    Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
                    Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim
                    Veniam, Quis Nostrud Exercitation Ullamco Laboris
                    Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute
                    Irure Dolor In Reprehenderit In Voluptate
                    Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.
                    Excepteur Sint Occaecat Cupidatat Non Proident,
                    Sunt In Culpa Qui Of cia Deserunt Mollit Anim
                    Id Est Laborum.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;

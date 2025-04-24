import React from 'react'
import HeroButton2 from '../../assets/image/herobutton2.png'
import HeroButton1 from '../../assets/image/herobutton1.png'
const HeroSection = () => {
    return (
        <section className="bg-bgcolor p-8 herosection-bg">
            <div className="absolute -top-[10px] left-[20%] w-[300px] h-full bg-white/10 -rotate-[25deg] z-0" />
            <div className='flex flex-col md:h-[700px] h-[500px] justify-around border-[1px] pl-[clamp(30px,4vw,50px)] border-white w-full'>
                <div className="flex gap-0 items-start">
                    <img
                        src={HeroButton1}
                        alt="Switch White"
                        className="w-[100px] z-10"
                    />
                    <img
                        src={HeroButton2}
                        alt="Switch Red"
                        className="w-[120px] relative top-[50px] -left-[20px]"
                    />
                </div>

                <div>
                    <h3 className='font-[400] text-[clamp(18px,4vw,25px)]'>Lorem ipsum <br /> dolor sit amet,</h3>
                    <h2 className='font-[500] text-[clamp(30px,4vw,45px)] text-[#2C2E35]'>CONSECTETUR</h2>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

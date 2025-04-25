import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact-section h-full w-full flex items-center py-10 px-4 sm:px-10 lg:px-20">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-10">
                <div className="w-full lg:w-[40%] bg-transparent">
                    <h2 className="text-[clamp(22px,4vw,38px)] font-extrabold text-[#784828] leading-tight mb-6 text-center lg:text-left">
                        LOREM ISPAM <br />
                        <span className="text-white">DOLOR SIT AMET</span><br />
                        CONSECTETUR
                    </h2>

                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-3 input-shadow outline-none text-[#D0AA87] text-[15px] placeholder:text-[#D0AA87] rounded-tr-3xl"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="p-3 input-shadow outline-none text-[#D0AA87] text-[15px] placeholder:text-[#D0AA87] rounded-bl-3xl"
                        />
                        <input
                            type="text"
                            placeholder="Contact number"
                            className="p-3 input-shadow outline-none text-[#D0AA87] text-[15px] placeholder:text-[#D0AA87] rounded-tr-3xl"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            className="p-3 input-shadow outline-none text-[#D0AA87] text-[15px] placeholder:text-[#D0AA87] rounded-bl-3xl"
                        />
                        <textarea
                            rows="4"
                            placeholder="Message"
                            className="col-span-1 sm:col-span-2 input-shadow outline-none p-3 text-[#D0AA87] text-[15px] placeholder:text-[#D0AA87] rounded shadow-md resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-white text-[14px] text-[#D0AA87] py-2 px-6 w-max rounded-full hover:shadow-lg transition"
                        >
                            BECOME A DEALER
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

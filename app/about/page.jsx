"use client";
import React, { useEffect } from "react";
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaRegLightbulb, FaHandshake, FaRegBuilding, FaRegSmile } from 'react-icons/fa';

export default function About() {
    useEffect(() => {
        // Add animation classes after component mounts
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-fade-in');
            }, index * 200); // Stagger the animations
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900/95 to-gray-800/95 text-gray-100 py-16 pt-52">
            <div className="container mx-auto px-4">
                {/* HERO SECTION - Text Right, Images Left */}
                <section className="mb-24">
                    <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-20">
                        {/* Left: Netflix-style Images */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex flex-row md:flex-col gap-6 md:gap-8 items-center justify-center h-full">
                                {["/image/living.jpg","/image/kitchen.png","/image/office-interior.jpg"].map((src,i)=>(
                                    <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg group w-40 h-32 md:w-64 md:h-44 flex-shrink-0 transition-transform duration-500 hover:scale-110 hover:z-10" style={{transition:'transform 0.4s cubic-bezier(.34,1.56,.64,1)'}}>
                                        <Image src={src} alt="Project" fill className="object-cover w-full h-full group-hover:brightness-110 group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Right: Glassy Text Box */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700/60 p-8 md:p-14 text-right md:text-right flex flex-col items-end"
                                style={{boxShadow:'0 8px 32px 0 rgba(31,38,135,0.37)', border:'1.5px solid rgba(255,255,255,0.10)'}}>
                                <h1 className="text-4xl md:text-6xl font-extrabold font-noto-serif text-white mb-8 drop-shadow-lg">
                                    Transforming Spaces, Elevating Lifestyles
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROCESS/FLOWCHART SECTION - Highlighted, Elegant */}
                <section className="mb-24">
                  <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-200 to-white drop-shadow-lg tracking-tight">How We Work</h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-12 text-center max-w-2xl font-light">Our process ensures a seamless, stress-free experience from concept to completion.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                      {/* Step 1 */}
                      <div className="relative flex flex-col items-center flex-1">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400/80 via-amber-200/80 to-white/80 shadow-2xl flex items-center justify-center mb-4 border-2 border-yellow-300/40 backdrop-blur-md">
                          <FaRegBuilding className="text-4xl text-gray-900" />
                        </div>
                        <h4 className="font-bold text-xl mb-2 text-yellow-200">Consultation</h4>
                        <p className="text-gray-200 text-center text-base max-w-xs">We understand your needs, style, and budget.</p>
                        {/* Arrow */}
                        <div className="hidden md:block absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2">
                          <span className="block w-10 h-1 bg-gradient-to-r from-yellow-300 via-amber-200 to-white rounded-full animate-pulse"></span>
                        </div>
                        <div className="md:hidden block mt-4">
                          <span className="block h-10 w-1 bg-gradient-to-b from-yellow-300 via-amber-200 to-white rounded-full animate-pulse"></span>
                        </div>
                      </div>
                      {/* Step 2 */}
                      <div className="relative flex flex-col items-center flex-1">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400/80 via-amber-200/80 to-white/80 shadow-2xl flex items-center justify-center mb-4 border-2 border-yellow-300/40 backdrop-blur-md">
                          <FaUsers className="text-4xl text-gray-900" />
                        </div>
                        <h4 className="font-bold text-xl mb-2 text-yellow-200">Design & Planning</h4>
                        <p className="text-gray-200 text-center text-base max-w-xs">Our experts craft a personalized design and plan every detail.</p>
                        {/* Arrow */}
                        <div className="hidden md:block absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2">
                          <span className="block w-10 h-1 bg-gradient-to-r from-yellow-300 via-amber-200 to-white rounded-full animate-pulse"></span>
                        </div>
                        <div className="md:hidden block mt-4">
                          <span className="block h-10 w-1 bg-gradient-to-b from-yellow-300 via-amber-200 to-white rounded-full animate-pulse"></span>
                        </div>
                      </div>
                      {/* Step 3 */}
                      <div className="relative flex flex-col items-center flex-1">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400/80 via-amber-200/80 to-white/80 shadow-2xl flex items-center justify-center mb-4 border-2 border-yellow-300/40 backdrop-blur-md">
                          <FaRegSmile className="text-4xl text-gray-900" />
                        </div>
                        <h4 className="font-bold text-xl mb-2 text-yellow-200">Execution & Handover</h4>
                        <p className="text-gray-200 text-center text-base max-w-xs">We deliver your dream space, on time and with a smile.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FINAL CALL TO ACTION - Enhanced Layout */}
                <section className="mb-12">
                    <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/80 rounded-2xl p-16 shadow-2xl border border-amber-400/20 flex flex-col items-center justify-center min-h-[300px]">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-200 to-white drop-shadow-lg">Ready to Transform Your Space?</h2>
                    </div>
                </section>

                {/* About Section */}
                <section className="mb-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16 relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50 -z-10"></div>
                            <h2 className="text-5xl md:text-6xl font-noto-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300 mb-4 hover:scale-105 transition-transform duration-300">
                                About Sri Sai Interiors
                            </h2>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <motion.div
                                    initial={{ scale: 0.95, y: 20 }}
                                    whileInView={{ scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                                    className="relative inline-block"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent blur-xl transform -translate-y-1"></span>
                                    <span className="relative text-4xl md:text-5xl font-noto-sans font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300">
                                        Crafting beautiful spaces since 2008
                                    </span>
                                </motion.div>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="h-1 w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-4"
                                />
                            </motion.div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500"
                        >
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-gray-300 font-noto-sans leading-relaxed text-lg md:text-xl">
                                    At Sri Sai Interiors, we don&apos;t just design spaces; we weave dreams into reality. With a deep understanding of aesthetics and a touch of Indian soul, we transform houses into homes filled with warmth, harmony, and unique character. Our dedication to quality craftsmanship and client trust has been recognized with accolades from around the globe. Choose Sri Sai Interiors, where your vision meets our artistry.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Information Section */}
                <section className="mb-24">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-16 relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/30 via-gray-900/80 to-gray-900/90 -z-10 rounded-2xl blur-sm"></div>
                            <h2 className="text-5xl md:text-6xl font-noto-serif font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-200 to-white mb-4 drop-shadow-lg tracking-tight">
                                Get in Touch with Sri Sai Interiors
                            </h2>
                            <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-transparent mx-auto mt-4"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Phone */}
                            <div className="group bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <MdPhone className="text-3xl text-amber-200" />
                                    </div>
                                    <h3 className="text-xl font-noto-serif font-semibold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300">Phone</h3>
                                    <a href="tel:+919876543210" className="text-gray-300 hover:text-amber-200 transition-colors duration-300 font-noto-sans">
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <MdEmail className="text-3xl text-amber-200" />
                                    </div>
                                    <h3 className="text-xl font-noto-serif font-semibold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300">Email</h3>
                                    <a href="mailto:info@srisaiinteriors.com" className="text-gray-300 hover:text-amber-200 transition-colors duration-300 font-noto-sans">
                                        info@srisaiinteriors.com
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="group bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 relative">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <MdLocationOn className="text-3xl text-amber-200" />
                                    </div>
                                    <h3 className="text-xl font-noto-serif font-semibold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300">Location</h3>
                                    <p className="text-gray-300 font-noto-sans">
                                        Hyderabad, Telangana
                                    </p>
                                </div>
                                {/* Enhanced Tooltip */}
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl shadow-2xl border border-amber-500/20 w-72">
                                        <div className="relative">
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45 border-t border-l border-amber-500/20"></div>
                                            <div className="space-y-2">
                                                <h4 className="text-amber-200 font-noto-serif font-semibold text-lg mb-2">Visit Us</h4>
                                                <div className="space-y-1.5">
                                                    <p className="text-white/90 font-noto-sans text-sm font-medium">SRI SAI INTERIORS</p>
                                                    <p className="text-gray-300 font-noto-sans text-sm">Plot No 1510, Raja Rajeswari Nagar</p>
                                                    <p className="text-gray-300 font-noto-sans text-sm">Near Gem Motors Service Center</p>
                                                    <p className="text-gray-300 font-noto-sans text-sm">Kondapur, Hyderabad</p>
                                                    <p className="text-amber-200/90 font-noto-sans text-sm font-medium">Telangana 500084</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx global>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(4rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-on-scroll {
                    opacity: 0;
                    transform: translateX(4rem);
                }

                .animate-fade-in {
                    animation: fadeInLeft 1.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
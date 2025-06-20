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
                                <h1 className="text-4xl md:text-6xl font-extrabold font-noto-serif bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-200 to-white mb-8 drop-shadow-lg">
                                    Transforming Spaces, Elevating Lifestyles
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW SRI SAI INTERIORS WORKS - Flowchart */}
                <section className="mb-24">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-200 to-white drop-shadow-lg">How Sri Sai Interiors Works</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-200 flex items-center justify-center shadow-lg mb-4">
                                    <FaRegBuilding className="text-4xl text-gray-900" />
                                </div>
                                <h4 className="font-bold text-lg mb-1 text-yellow-200">Consultation</h4>
                                <p className="text-gray-200 text-center max-w-xs">We understand your needs, style, and budget.</p>
                            </div>
                            {/* Arrow */}
                            <div className="hidden md:block text-5xl text-yellow-300">→</div>
                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-200 flex items-center justify-center shadow-lg mb-4">
                                    <FaUsers className="text-4xl text-gray-900" />
                                </div>
                                <h4 className="font-bold text-lg mb-1 text-yellow-200">Design & Planning</h4>
                                <p className="text-gray-200 text-center max-w-xs">Our experts craft a personalized design and plan every detail.</p>
                            </div>
                            {/* Arrow */}
                            <div className="hidden md:block text-5xl text-yellow-300">→</div>
                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-200 flex items-center justify-center shadow-lg mb-4">
                                    <FaRegSmile className="text-4xl text-gray-900" />
                                </div>
                                <h4 className="font-bold text-lg mb-1 text-yellow-200">Execution & Handover</h4>
                                <p className="text-gray-200 text-center max-w-xs">We deliver your dream space, on time and with a smile.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="mb-24">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <div className="flex flex-col items-center">
                            <FaRegLightbulb className="text-5xl text-amber-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Innovative Designs</h3>
                            <p className="text-gray-300">We bring fresh, creative ideas tailored to your lifestyle and preferences.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaHandshake className="text-5xl text-amber-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Client-Centric Approach</h3>
                            <p className="text-gray-300">Your vision is our blueprint. We listen, collaborate, and deliver beyond expectations.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaAward className="text-5xl text-amber-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Award-Winning Quality</h3>
                            <p className="text-gray-300">Recognized for excellence in design, execution, and customer satisfaction.</p>
                        </div>
                    </div>
                </section>

                {/* SIGNATURE PROJECTS - Netflix-like Hover */}
                <section className="mb-24">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-200 to-white">Signature Projects</h2>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            {[{src:'/image/living.jpg',title:'Modern Luxury Living',desc:'A blend of comfort and elegance for a premium Hyderabad residence.'},{src:'/image/kitchen.png',title:'Contemporary Kitchen',desc:'Sleek, functional, and beautiful—tailored for modern Indian homes.'},{src:'/image/office-interior.jpg',title:'Elegant Office Space',desc:'Boosting productivity and style for a leading Hyderabad startup.'}].map((proj,i)=>(
                                <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg group w-full md:w-80 h-64 flex-shrink-0 transition-transform duration-500 hover:scale-105 hover:z-10" style={{transition:'transform 0.4s cubic-bezier(.34,1.56,.64,1)'}}>
                                    <Image src={proj.src} alt={proj.title} fill className="object-cover w-full h-full group-hover:brightness-110 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/90 to-transparent p-4">
                                        <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                                        <p className="text-gray-300 text-sm">{proj.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AWARDS & RECOGNITION */}
                <section className="mb-24">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-200 to-white">Awards & Recognition</h2>
                        <div className="flex flex-wrap justify-center gap-8 items-center">
                            <Image src="/image/awards.png" alt="Award" width={100} height={100} className="object-contain" />
                            <Image src="/image/awards1.png" alt="Award" width={100} height={100} className="object-contain" />
                            <Image src="/image/amazon-pay.png" alt="Amazon Pay" width={100} height={100} className="object-contain" />
                            <Image src="/image/intel.png" alt="Intel" width={100} height={100} className="object-contain" />
                            <Image src="/image/nike.png" alt="Nike" width={100} height={100} className="object-contain" />
                            <Image src="/image/oracle.png" alt="Oracle" width={100} height={100} className="object-contain" />
                            <Image src="/image/samsung.png" alt="Samsung" width={100} height={100} className="object-contain" />
                        </div>
                    </div>
                </section>

                {/* HOW WE WORK - PROCESS */}
                <section className="mb-24">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-200 to-white">Our Process</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <div className="flex flex-col items-center">
                                <FaRegBuilding className="text-4xl text-amber-400 mb-2" />
                                <h4 className="font-bold text-lg mb-1">Consultation</h4>
                                <p className="text-gray-300 text-center">We understand your needs, style, and budget.</p>
                            </div>
                            <span className="hidden md:inline-block w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-200 rounded-full" />
                            <div className="flex flex-col items-center">
                                <FaUsers className="text-4xl text-amber-400 mb-2" />
                                <h4 className="font-bold text-lg mb-1">Design & Planning</h4>
                                <p className="text-gray-300 text-center">Our experts craft a personalized design and plan every detail.</p>
                            </div>
                            <span className="hidden md:inline-block w-12 h-1 bg-gradient-to-r from-yellow-200 to-amber-400 rounded-full" />
                            <div className="flex flex-col items-center">
                                <FaRegSmile className="text-4xl text-amber-400 mb-2" />
                                <h4 className="font-bold text-lg mb-1">Execution & Handover</h4>
                                <p className="text-gray-300 text-center">We deliver your dream space, on time and with a smile.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="mb-24">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-200 to-white">What Our Clients Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-amber-400/20">
                                <p className="text-lg text-gray-200 italic mb-4">“Sri Sai Interiors turned our house into a home. The attention to detail and professionalism were outstanding!”</p>
                                <div className="flex items-center gap-4 justify-center">
                                    <Image src="/image/profile1.jpg" alt="Client" width={48} height={48} className="rounded-full border-2 border-amber-400/40" />
                                    <span className="font-bold">Priya S.</span>
                                </div>
                            </div>
                            <div className="bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-amber-400/20">
                                <p className="text-lg text-gray-200 italic mb-4">“From design to execution, the team was with us every step. Highly recommended for anyone seeking quality interiors.”</p>
                                <div className="flex items-center gap-4 justify-center">
                                    <Image src="/image/profile2.jpg" alt="Client" width={48} height={48} className="rounded-full border-2 border-amber-400/40" />
                                    <span className="font-bold">Ramesh K.</span>
                                </div>
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

                {/* Success Showcase Section */}
                <section className="mb-24 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50 -z-10"></div>
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="inline-block"
                            >
                                <h2 className="text-5xl md:text-6xl font-noto-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300 mb-4 hover:scale-105 transition-transform duration-300">
                                    Our Success Story
                                </h2>
                                <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent mx-auto mt-4"></div>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-6 text-gray-300 font-noto-sans max-w-2xl mx-auto"
                            >
                                Delivering excellence in interior design with a commitment to quality and customer satisfaction
                            </motion.p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Project Completion */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                            >
                                <div className="relative w-full h-72 overflow-hidden">
                                    <Image
                                        src="/image/project.jpg"
                                        alt="Project Completion"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                </div>
                                <div className="p-8 relative z-10">
                                    <h3 className="text-2xl font-noto-serif font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">Multiple Projects</h3>
                                    <p className="text-gray-300 font-noto-sans leading-relaxed">Successfully completed numerous projects across Hyderabad, delivering excellence in every detail.</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </motion.div>

                            {/* Customer Satisfaction */}
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                            >
                                <div className="relative w-full h-72 overflow-hidden">
                                    <Image
                                        src="/image/living.jpg"
                                        alt="Customer Satisfaction"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                </div>
                                <div className="p-8 relative z-10">
                                    <h3 className="text-2xl font-noto-serif font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">98% Satisfaction</h3>
                                    <p className="text-gray-300 font-noto-sans leading-relaxed">Our clients&apos; happiness is our priority, reflected in our consistently high satisfaction ratings.</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </motion.div>

                            {/* Awards & Recognition */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                            >
                                <div className="relative w-full h-72 overflow-hidden">
                                    <Image
                                        src="/image/awards.png"
                                        alt="Awards & Recognition"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                </div>
                                <div className="p-8 relative z-10">
                                    <h3 className="text-2xl font-noto-serif font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">15+ Awards</h3>
                                    <p className="text-gray-300 font-noto-sans leading-relaxed">Recognized for excellence in interior design and customer service by industry leaders.</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </motion.div>
                        </div>
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
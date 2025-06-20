"use client";

import React, { useState, useEffect } from 'react';
import PhonePopup from './PhonePopup';
import ConsultationModal from './ConsultationModal';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
    const [showPhonePopup, setShowPhonePopup] = useState(false);
    const [showConsultationModal, setShowConsultationModal] = useState(false);
    const [showArrow, setShowArrow] = useState(true);

    // Animation for arrow: toggle every 2 seconds
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const interval = setInterval(() => {
            setShowArrow((prev) => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/Untitled design (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Desktop Content */}
            <div className="relative z-10 flex items-center justify-center h-full hidden md:flex">
                <div className="text-center px-2 md:px-4 flex items-center justify-center h-full w-full">
                    {/* Desktop Enhanced Merged Box Centered Vertically with Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="bg-white/5 backdrop-blur-sm rounded-3xl px-10 py-1 md:px-16 md:py-2 max-w-2xl mx-auto shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-500 min-h-[1.5rem] md:min-h-[2rem] mt-16 md:mt-24"
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 leading-tight">
                            Transform Your Space with
                            <span className="block text-yellow-400 mt-2">Sri Sai Interiors</span>
                        </h1>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 rounded-full"></div>
                        
                        <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed max-w-lg mx-auto font-medium">
                            Creating beautiful, functional interiors that reflect your style and enhance your lifestyle. 
                            From concept to completion, we bring your vision to life.
                        </p>

                        {/* Desktop Enhanced Button - Only Consultation */}
                        <div className="flex justify-center items-center">
                            <button 
                                onClick={() => setShowConsultationModal(true)}
                                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg relative overflow-hidden text-base"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    Free Consultation
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Content */}
            <div className="relative z-10 flex items-center justify-center h-full md:hidden">
                <div className="text-center px-2 flex items-center justify-center h-full w-full">
                    {/* Mobile Enhanced Merged Box Centered Vertically with Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 120 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-1 max-w-sm mx-auto shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-500 min-h-[1rem] mt-8"
                    >
                        <h1 className="text-base font-black text-white mb-2 leading-tight">
                            Transform Your Space with
                            <span className="block text-yellow-400 mt-2">Sri Sai Interiors</span>
                        </h1>
                        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full"></div>
                        
                        <p className="text-xs text-gray-200 mb-4 leading-relaxed mx-auto font-medium">
                            Creating beautiful, functional interiors that reflect your style and enhance your lifestyle. 
                            From concept to completion, we bring your vision to life.
                        </p>

                        {/* Mobile Enhanced Button - Only Consultation */}
                        <div className="flex justify-center items-center">
                            <button 
                                onClick={() => setShowConsultationModal(true)}
                                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-1 shadow-lg relative overflow-hidden text-sm w-full justify-center"
                            >
                                <span className="relative z-10 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    Free Consultation
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>
                        </div>
                    </motion.div>
                </div>
                {/* Animated Explore More Arrow - Mobile Only */}
                <AnimatePresence>
                    {showArrow && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.6 }}
                            className="fixed top-28 right-6 flex flex-col items-center pointer-events-none select-none"
                            style={{ zIndex: 50 }}
                        >
                            <FaArrowDown className="text-yellow-400 text-2xl drop-shadow-lg animate-bounce" />
                            <span className="text-xs text-white/80 mt-1 font-semibold tracking-wide animate-pulse">Menu</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Phone Popup */}
            {showPhonePopup && (
                <PhonePopup onClose={() => setShowPhonePopup(false)} />
            )}

            {/* Consultation Modal */}
            {showConsultationModal && (
                <ConsultationModal isOpen={showConsultationModal} onClose={() => setShowConsultationModal(false)} />
            )}
        </section>
    );
};

export default HeroSection;
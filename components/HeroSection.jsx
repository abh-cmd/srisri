"use client";

import React, { useState } from 'react';
import PhonePopup from './PhonePopup';
import ConsultationModal from './ConsultationModal';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const [showPhonePopup, setShowPhonePopup] = useState(false);
    const [showConsultationModal, setShowConsultationModal] = useState(false);

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
                        className="bg-white/5 backdrop-blur-sm rounded-3xl px-8 py-2 md:px-12 md:py-3 max-w-2xl mx-auto shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-500 min-h-[3.5rem] md:min-h-[4rem]"
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                            <span className="block">Transform Your Space with</span>
                            <span className="block text-yellow-400 mt-2 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">Sri Sai Interiors</span>
                        </h1>
                        <div className="w-full h-1 bg-yellow-400 mx-auto mb-4 rounded-full shadow-[0_0_16px_rgba(251,191,36,0.4)] animate-glow-line"></div>
                        
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
                        className="bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-1 max-w-sm mx-auto shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-500 min-h-[2.5rem]"
                    >
                        <h1 className="text-xl font-black text-white mb-2 leading-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                            <span className="block">Transform Your Space with</span>
                            <span className="block text-yellow-400 mt-2 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">Sri Sai Interiors</span>
                        </h1>
                        <div className="w-full h-1 bg-yellow-400 mx-auto mb-3 rounded-full shadow-[0_0_12px_rgba(251,191,36,0.3)] animate-glow-line"></div>
                        
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
            </div>

            {/* Phone Popup */}
            {showPhonePopup && (
                <PhonePopup onClose={() => setShowPhonePopup(false)} />
            )}

            {/* Consultation Modal */}
            {showConsultationModal && (
                <ConsultationModal isOpen={showConsultationModal} onClose={() => setShowConsultationModal(false)} />
            )}

            <style jsx global>{`
                @keyframes glowLine {
                    0%, 100% { box-shadow: 0 0 16px 4px rgba(251,191,36,0.3); }
                    50% { box-shadow: 0 0 32px 8px rgba(251,191,36,0.5); }
                }
                .animate-glow-line {
                    animation: glowLine 2.5s infinite alternate;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
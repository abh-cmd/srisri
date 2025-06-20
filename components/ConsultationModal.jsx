"use client";

import React, { useState, useEffect } from 'react';
import { MdBrush, MdAccessTime, MdPayments, MdPhone, MdEmail, MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const ConsultationModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        homeType: '',
        location: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 5000);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                showNotification('Thank you! We will contact you soon.');
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    homeType: '',
                    location: ''
                });
                setErrors({});
                setTimeout(() => onClose(), 2000);
            } else {
                showNotification(data.error || 'Something went wrong. Please try again.', 'error');
            }
        } catch (error) {
            showNotification('Failed to submit. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-blue-900/60 via-black/70 to-blue-900/60 backdrop-blur-xl"
                    style={{ position: 'fixed' }}
                    onClick={onClose}
                >
                    {/* Brand radial accent background */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vw] max-w-[600px] max-h-[400px] rounded-full bg-gradient-radial from-amber-300/30 via-yellow-200/10 to-transparent blur-2xl opacity-70"></div>
                    </div>
                    <motion.div
                        initial={{ scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.96, opacity: 0 }}
                        className="relative w-full max-w-xs sm:max-w-xs md:max-w-xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.25),0_1.5px_6px_0_rgba(255,255,255,0.08)] border border-white/30 ring-2 ring-amber-300/30 overflow-hidden p-1 sm:p-2 md:p-6 max-h-[80vh] overflow-y-auto before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none before:ring-4 before:ring-amber-200/30 before:blur-[2px] before:opacity-70"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full p-2 hover:scale-110 hover:bg-amber-100/30 hover:text-amber-500 text-gray-500 hover:shadow-amber-200/40 transition-all duration-300 z-10"
                        >
                            <MdClose className="w-6 h-6" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left Column - Features (hidden on mobile) */}
                            <div className="hidden md:block p-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl shadow-inner">
                                <h2 className="text-2xl font-noto-serif font-semibold text-white mb-8 flex items-center gap-2">
                                    <MdBrush className="inline-block text-amber-300 mr-1" />
                                    Our Promise to You
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center">
                                            <MdBrush className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Creative Excellence</h3>
                                            <p className="text-gray-300 text-sm">Innovative designs that reflect your unique style</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center">
                                            <MdAccessTime className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Timely Delivery</h3>
                                            <p className="text-gray-300 text-sm">We respect your time and deliver on schedule</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center">
                                            <MdPayments className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Transparent Pricing</h3>
                                            <p className="text-gray-300 text-sm">No hidden costs, clear and fair pricing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Form */}
                            <div className="p-6 md:p-8">
                                <h2 className="text-2xl font-noto-serif font-semibold text-white mb-6 flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(255,255,255,0.12)]">
                                    <MdPhone className="inline-block text-amber-300 mr-1" />
                                    Schedule Your Consultation
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <AnimatePresence>
                                    {notification && (
                                        <motion.div
                                            initial={{ y: -20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className={`p-3 rounded-2xl text-center mb-2 border-2 shadow-lg ${
                                                notification.type === 'success' 
                                                    ? 'bg-white/30 text-green-700 border-green-300/40 backdrop-blur-md shadow-green-200/40' 
                                                    : 'bg-white/30 text-red-700 border-red-300/40 backdrop-blur-md shadow-red-200/40'
                                            }`}
                                        >
                                            {notification.message}
                                        </motion.div>
                                    )}
                                    </AnimatePresence>

                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-400/80 focus:ring-2 focus:ring-amber-300/40 focus:shadow-[0_0_0_4px_rgba(251,191,36,0.12)] shadow-[inset_0_1.5px_6px_0_rgba(255,255,255,0.18)] transition-all duration-300 font-medium"
                                        />
                                        {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder="Mobile Number"
                                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-400/80 focus:ring-2 focus:ring-amber-300/40 focus:shadow-[0_0_0_4px_rgba(251,191,36,0.12)] shadow-[inset_0_1.5px_6px_0_rgba(255,255,255,0.18)] transition-all duration-300 font-medium"
                                        />
                                        {errors.mobile && <p className="mt-1 text-red-400 text-sm">{errors.mobile}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-400/80 focus:ring-2 focus:ring-amber-300/40 focus:shadow-[0_0_0_4px_rgba(251,191,36,0.12)] shadow-[inset_0_1.5px_6px_0_rgba(255,255,255,0.18)] transition-all duration-300 font-medium"
                                        />
                                        {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name="homeType"
                                            value={formData.homeType}
                                            onChange={handleChange}
                                            placeholder="Home Type (Optional)"
                                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-400/80 focus:ring-2 focus:ring-amber-300/40 focus:shadow-[0_0_0_4px_rgba(251,191,36,0.12)] shadow-[inset_0_1.5px_6px_0_rgba(255,255,255,0.18)] transition-all duration-300 font-medium"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Location"
                                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-400/80 focus:ring-2 focus:ring-amber-300/40 focus:shadow-[0_0_0_4px_rgba(251,191,36,0.12)] shadow-[inset_0_1.5px_6px_0_rgba(255,255,255,0.18)] transition-all duration-300 font-medium"
                                        />
                                        {errors.location && <p className="mt-1 text-red-400 text-sm">{errors.location}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 text-black font-bold rounded-full shadow-[0_2px_16px_0_rgba(251,191,36,0.22)] hover:from-yellow-400 hover:to-amber-400 hover:shadow-amber-200/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300/40 focus:shadow-[0_0_0_4px_rgba(251,191,36,0.18)] disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Request Consultation'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConsultationModal; 
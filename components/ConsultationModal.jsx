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
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-[3px]"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-xs sm:max-w-xs md:max-w-xl bg-gradient-to-br from-gray-900/70 via-blue-900/60 to-black/80 rounded-3xl shadow-2xl border border-amber-400/30 backdrop-blur-xl overflow-hidden p-1 sm:p-2 md:p-4 max-h-[80vh] overflow-y-auto ring-1 ring-amber-300/10"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-300 hover:text-amber-400 bg-black/30 rounded-full p-1 shadow-lg transition-all duration-300 z-10 border border-white/10 hover:scale-110"
                        >
                            <MdClose className="w-6 h-6" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left Column - Features (hidden on mobile) */}
                            <div className="hidden md:block p-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10">
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
                            <div className="p-8">
                                <h2 className="text-2xl font-noto-serif font-semibold text-white mb-6 flex items-center gap-2">
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
                                            className={`p-3 rounded-lg shadow-lg text-center mb-2 ${
                                                notification.type === 'success' 
                                                    ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                                                    : 'bg-red-500/20 text-red-300 border border-red-400/30'
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
                                            className="w-full px-4 py-3 bg-gradient-to-br from-black/30 via-blue-900/20 to-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-300/30 shadow-inner transition-all duration-300"
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
                                            className="w-full px-4 py-3 bg-gradient-to-br from-black/30 via-blue-900/20 to-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-300/30 shadow-inner transition-all duration-300"
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
                                            className="w-full px-4 py-3 bg-gradient-to-br from-black/30 via-blue-900/20 to-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-300/30 shadow-inner transition-all duration-300"
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
                                            className="w-full px-4 py-3 bg-gradient-to-br from-black/30 via-blue-900/20 to-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-300/30 shadow-inner transition-all duration-300"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Location"
                                            className="w-full px-4 py-3 bg-gradient-to-br from-black/30 via-blue-900/20 to-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-300/30 shadow-inner transition-all duration-300"
                                        />
                                        {errors.location && <p className="mt-1 text-red-400 text-sm">{errors.location}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black font-bold rounded-2xl shadow-xl hover:from-yellow-400 hover:to-amber-400 hover:shadow-amber-200/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300/40 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
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
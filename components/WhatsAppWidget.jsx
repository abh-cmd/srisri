/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react';

const WhatsAppWidget = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showPhonePopup, setShowPhonePopup] = useState(false);

    const handleWhatsAppClick = () => {
        const phoneNumber = '+917013825454'; // Official WhatsApp number
        const message = 'Hello! I would like to know more about your interior design services.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handlePhoneClick = () => {
        setShowPhonePopup(true);
    };

    return (
        <>
            {/* Floating WhatsApp and Phone Buttons - Always Visible on All Devices */}
            <div className="fixed bottom-6 right-6 z-50">
                <div className="flex flex-col gap-4">
                    {/* WhatsApp Button */}
                    <div className="relative">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                        </button>

                        {/* WhatsApp Expanded Content */}
                        {isExpanded && (
                            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 w-64 border border-gray-200">
                                <div className="text-center">
                                    <h3 className="font-bold text-gray-800 mb-2">Get Instant Quote!</h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Send us a message and get a free consultation within minutes.
                                    </p>
                                    <button
                                        onClick={handleWhatsAppClick}
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Phone Button */}
                    <div className="relative">
                        <button
                            onClick={handlePhoneClick}
                            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                            aria-label="Phone"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Phone Information Side Popup */}
            {showPhonePopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowPhonePopup(false)}
                    ></div>
                    
                    <div className="relative bg-white rounded-2xl shadow-lg max-w-md w-full mx-4 transform transition-all duration-300">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">Contact Information</h2>
                                <button
                                    onClick={() => setShowPhonePopup(false)}
                                    className="text-white hover:text-gray-200 transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Phone Number */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Phone Number</h3>
                                    <p className="text-gray-600">+91 701 382 5454</p>
                                </div>
                            </div>

                            {/* Office Location */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Office Location</h3>
                                    <p className="text-gray-600">123 Interior Street, Design District, City - 123456</p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Working Hours</h3>
                                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                                </div>
                            </div>

                            {/* Call Button */}
                            <button
                                onClick={() => {
                                    window.location.href = 'tel:+917013825454';
                                    setShowPhonePopup(false);
                                }}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Call Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppWidget; 
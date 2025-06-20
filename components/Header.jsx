"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/projects", label: "Projects" },
        { href: "/gallery", label: "Gallery" },
    ];

    return (
        <>
            {/* Header (Desktop & Mobile) */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-blue-800/60 backdrop-blur-lg shadow-md' 
                    : 'bg-blue-800/40 backdrop-blur-md'
            }`}>
                <div className="container mx-auto px-4">
                    {/* Unified Header Row for all views */}
                    <div className="flex items-center justify-between h-20 md:h-24 relative w-full">
                        {/* Logo and Title Row (left-aligned on mobile, centered on desktop) */}
                        <div className="flex items-center space-x-3">
                            <Link href="/" className="flex items-center group">
                                <div className="relative w-12 h-12 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105">
                                    <Image
                                        src="/logooo.png"
                                        alt="Sri Sai Interiors Logo"
                                        fill
                                        className="object-contain brightness-125 drop-shadow-lg group-hover:brightness-150 group-hover:drop-shadow-[0_0_24px_rgba(255,255,0,0.25)] transition-all duration-500 bg-white/10 rounded-full"
                                        priority
                                    />
                                </div>
                            </Link>
                            <div className="flex flex-col justify-center">
                                <span className="text-lg md:text-3xl font-black text-white leading-tight tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] animate-header-glow bg-gradient-to-r from-yellow-200 via-white to-yellow-300 bg-clip-text text-transparent">
                                    SRI SAI INTERIORS
                                </span>
                                <span className="w-12 md:w-24 h-1 bg-yellow-400 mt-1 rounded-full shadow-[0_0_6px_rgba(251,191,36,0.2)] animate-header-line-glow"></span>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                Home
                            </Link>
                            <Link href="/about" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                About
                            </Link>
                            <Link href="/projects" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                Projects
                            </Link>
                            <Link href="/gallery" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                Gallery
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2 ml-2"
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu with Animation */}
            <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    key="mobile-menu"
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                    className="md:hidden bg-blue-900/95 backdrop-blur-lg border-t border-blue-700 fixed top-24 left-0 right-0 z-40"
                >
                    <nav className="py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link 
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-3 text-white hover:text-yellow-400 hover:bg-blue-800/50 transition-all duration-300 font-medium ${
                                    pathname === item.href ? 'bg-blue-800/50 text-yellow-400' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}
            </AnimatePresence>

            <style jsx global>{`
                @keyframes headerGlow {
                    0%, 100% { text-shadow: 0 0 6px rgba(255,255,255,0.25); }
                    50% { text-shadow: 0 0 14px rgba(255,255,255,0.5); }
                }
                .animate-header-glow {
                    animation: headerGlow 2.5s infinite alternate;
                }
                @keyframes headerLineGlow {
                    0%, 100% { box-shadow: 0 0 8px 2px rgba(251,191,36,0.12); }
                    50% { box-shadow: 0 0 16px 4px rgba(251,191,36,0.22); }
                }
                .animate-header-line-glow {
                    animation: headerLineGlow 2.5s infinite alternate;
                }
            `}</style>
        </>
    );
};

export default Header;
"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Adjusted scroll values for smoother parallax
    const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const images = [
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.02_a305b638.jpg', description: 'Plush seating & ambient lighting', category: 'Living Room' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.03_bd4fd090.jpg', description: 'Premium materials & elegant design', category: 'Bedroom' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.03_a0d9c9fa.jpg', description: 'Modern appliances & custom cabinetry', category: 'Kitchen' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.03_bbb7613a.jpg', description: 'Custom lighting & premium finishes', category: 'Dining' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.04_a0c0c32f.jpg', description: 'Luxury fixtures & modern tiles', category: 'Bathroom' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.04_37eb7a84.jpg', description: 'Custom furniture & artistic details', category: 'Living Room' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.04_9c9bae1b.jpg', description: 'Ergonomic design & smart lighting', category: 'Office' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.05_4732b4f5.jpg', description: 'Elegant design & premium finishes', category: 'Bedroom' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.05_6498fa6c.jpg', description: 'Custom cabinetry & modern appliances', category: 'Kitchen' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.06_563bfab1.jpg', description: 'Modern furniture & artistic lighting', category: 'Living Room' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.06_b40564b1.jpg', description: 'Custom lighting & elegant finishes', category: 'Dining' }
    ];

    return (
        <div className="relative min-h-screen py-16 pt-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <Image
                    src="/image/gallery.jpg"
                    alt="Gallery Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12 drop-shadow-lg">Our Gallery</h1>
                {/* Our Design Process Box - Restored */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">Our Design Process</h2>
                        <p className="text-gray-200 text-center text-base md:text-lg font-medium">
                            We follow a collaborative, step-by-step approach to transform your vision into reality. From initial consultation and concept development to material selection, execution, and final handover, our team ensures a seamless and enjoyable experience at every stage.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-square rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            onClick={() => setIndex(idx)}
                        >
                            <Image
                                src={image.src}
                                alt={`Gallery Image ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
                <Lightbox
                    slides={images}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                />
            </div>
        </div>
    );
}
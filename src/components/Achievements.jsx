import React, { useState } from 'react';
import Section from './Section';
import { achievements } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getAssetPath } from '../utils/helpers';

const Achievements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
    };

    return (
        <Section id="achievements" title="Achievements" className="bg-white dark:bg-secondary">
            <div className="relative max-w-5xl mx-auto px-4">
                <div className="relative h-[600px] w-full overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="h-[75%] w-full relative overflow-hidden bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-2">
                                <img
                                    src={getAssetPath(achievements[currentIndex].image)}
                                    alt={achievements[currentIndex].title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="h-[25%] bg-white dark:bg-gray-800 p-6 flex flex-col justify-center text-center relative z-10 border-t border-gray-100 dark:border-gray-700">
                                <motion.h3
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2"
                                >
                                    {achievements[currentIndex].title}
                                </motion.h3>
                                <motion.p
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
                                >
                                    {achievements[currentIndex].description}
                                </motion.p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-[32.5%] -translate-y-1/2 p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:bg-black/40 transition-all shadow-lg z-20"
                        aria-label="Previous Slide"
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-[32.5%] -translate-y-1/2 p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:bg-black/40 transition-all shadow-lg z-20"
                        aria-label="Next Slide"
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 gap-2">
                    {achievements.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-accent w-8'
                                : 'bg-gray-300 dark:bg-gray-600 w-2 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Achievements;

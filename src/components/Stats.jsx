import React from 'react';
import { stats } from '../data/content';
import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <section className="py-10 bg-accent text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 text-center relative z-10">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</span>
                        <span className="text-sm md:text-base font-semibold">{stat.label}</span>
                        <span className="text-xs text-white/80 mt-1">{stat.sub}</span>
                    </motion.div>
                ))}
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none" />
        </section>
    );
};

export default Stats;

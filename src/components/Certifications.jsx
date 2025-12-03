import React from 'react';
import Section from './Section';
import { certifications } from '../data/content';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    return (
        <Section id="certifications" title="Certifications" className="bg-gray-50 dark:bg-primary">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-accent group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-accent group-hover:scale-110 transition-transform">
                                <FaCertificate size={20} />
                            </div>
                            <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                                {cert.date}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {cert.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {cert.issuer}
                        </p>

                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent text-sm font-medium flex items-center gap-2 hover:underline"
                        >
                            View Certificate <FaExternalLinkAlt size={12} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;

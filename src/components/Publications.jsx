import React, { useState } from 'react';
import Section from './Section';
import { publications, personalInfo } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaEnvelope, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { SiIeee } from 'react-icons/si';

const Publications = () => {
    const [filter, setFilter] = useState('Research Paper');
    const [selectedPub, setSelectedPub] = useState(null);

    const filteredPubs = publications.filter(pub => pub.category === filter);

    return (
        <Section id="publications" title="Research Publications" className="bg-gray-50 dark:bg-primary">
            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 mb-10">
                {['Research Paper', 'Book Chapter'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                            ? 'bg-accent text-white shadow-md'
                            : 'bg-white dark:bg-secondary text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                <AnimatePresence mode='wait'>
                    {filteredPubs.map((pub, index) => (
                        <motion.div
                            key={pub.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white dark:bg-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-accent">
                                    {pub.link ? (
                                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                            {pub.category === 'Book Chapter' ? <FaBook size={20} /> : <SiIeee size={24} />}
                                        </a>
                                    ) : (
                                        <span>
                                            {pub.category === 'Book Chapter' ? <FaBook size={20} /> : <SiIeee size={24} />}
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                                    {pub.year}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                {pub.title}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-1 text-justify">
                                {pub.summary}
                            </p>

                            <div className="flex gap-3 mt-auto">
                                <button
                                    onClick={() => setSelectedPub(pub)}
                                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                    View Abstract
                                </button>
                                {pub.link ? (
                                    <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
                                    >
                                        <FaExternalLinkAlt size={14} /> View Paper
                                    </a>
                                ) : (
                                    <a
                                        href={`mailto:${personalInfo.email}?subject=Request for Paper: ${pub.title}&body=Hi Thilak,%0D%0A%0D%0AI would like to request a copy of your ${pub.category.toLowerCase()} titled "${pub.title}".%0D%0A%0D%0AThanks.`}
                                        className="flex-1 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
                                    >
                                        <FaEnvelope size={14} /> Request
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Abstract Modal */}
            <AnimatePresence>
                {selectedPub && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedPub(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white dark:bg-secondary rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedPub(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                                <FaTimes size={24} />
                            </button>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 pr-8">
                                {selectedPub.title}
                            </h3>

                            <div className="flex gap-2 mb-6">
                                <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                                    {selectedPub.category}
                                </span>
                                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                                    {selectedPub.year}
                                </span>
                            </div>

                            <div className="prose dark:prose-invert max-w-none">
                                <h4 className="text-lg font-semibold mb-2">Abstract</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-justify">
                                    {selectedPub.abstract}
                                </p>
                            </div>

                            {/* Publication Details */}
                            <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
                                {selectedPub.publishedIn && (
                                    <p><span className="font-semibold text-gray-900 dark:text-white">Published in:</span> {selectedPub.publishedIn}</p>
                                )}
                                {selectedPub.conferenceDate && (
                                    <p><span className="font-semibold text-gray-900 dark:text-white">Conference Date:</span> {selectedPub.conferenceDate}</p>
                                )}
                                {selectedPub.location && (
                                    <p><span className="font-semibold text-gray-900 dark:text-white">Location:</span> {selectedPub.location}</p>
                                )}
                                {selectedPub.dateAdded && (
                                    <p><span className="font-semibold text-gray-900 dark:text-white">Date Added:</span> {selectedPub.dateAdded}</p>
                                )}
                                {selectedPub.doi && (
                                    <p><span className="font-semibold text-gray-900 dark:text-white">DOI:</span> {selectedPub.doi}</p>
                                )}
                                {selectedPub.publisher && (
                                    <p><span className="font-semibold text-gray-900 dark:text-white">Publisher:</span> {selectedPub.publisher}</p>
                                )}
                                {selectedPub.status && (
                                    <p><span className="font-semibold text-accent">Status:</span> {selectedPub.status}</p>
                                )}
                            </div>

                            <div className="mt-8 flex justify-end gap-3">
                                {selectedPub.link && (
                                    <a
                                        href={selectedPub.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                                    >
                                        <FaExternalLinkAlt size={16} /> View Paper
                                    </a>
                                )}
                                <a
                                    href={`mailto:${personalInfo.email}?subject=Request for Paper: ${selectedPub.title}&body=Hi Thilak,%0D%0A%0D%0AI would like to request a copy of your ${selectedPub.category.toLowerCase()} titled "${selectedPub.title}".%0D%0A%0D%0AThanks.`}
                                    className="px-6 py-2 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors flex items-center gap-2"
                                >
                                    <FaEnvelope size={16} /> Request Document
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Publications;

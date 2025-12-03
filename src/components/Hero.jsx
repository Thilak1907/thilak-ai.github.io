import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/content';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaDownload } from 'react-icons/fa';

import { SiGooglescholar, SiIeee, SiScopus } from 'react-icons/si';
import { getAssetPath } from '../utils/helpers';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-primary transition-colors duration-300 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">

                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-2">
                            {personalInfo.name}
                        </h1>
                        <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-3 font-medium">
                            {personalInfo.tagline}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            {personalInfo.heroIntro}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap justify-center md:justify-start gap-5 text-gray-600 dark:text-gray-400"
                    >
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="LinkedIn">
                            <FaLinkedin size={26} />
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="GitHub">
                            <FaGithub size={26} />
                        </a>
                        <a href={personalInfo.googleScholar} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Google Scholar">
                            <SiGooglescholar size={26} />
                        </a>
                        <a href={personalInfo.ieee} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="IEEE Xplore">
                            <SiIeee size={26} />
                        </a>
                        <a href={personalInfo.scopus} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Scopus">
                            <SiScopus size={26} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center md:justify-start gap-4"
                    >
                        <a
                            href={getAssetPath(personalInfo.resumeUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/25 flex items-center gap-2"
                        >
                            <FaFileAlt /> View Resume
                        </a>
                        <a
                            href={getAssetPath(personalInfo.resumeUrl)}
                            download
                            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg flex items-center gap-2"
                        >
                            <FaDownload /> Download
                        </a>
                    </motion.div>
                </div>

                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-64 h-64 md:w-96 md:h-96"
                    >
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative w-full h-full bg-gradient-to-br from-accent to-purple-600 rounded-full p-1 shadow-2xl">
                            <div className="w-full h-full bg-white dark:bg-secondary rounded-full overflow-hidden flex items-center justify-center">
                                <img src={getAssetPath("/profile.jpg")} alt="Thilak Kumar V" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;

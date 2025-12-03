import React from 'react';
import { personalInfo } from '../data/content';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-secondary py-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{personalInfo.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">AI Engineer | Researcher</p>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    <p className="mt-1">Built with React & TailwindCSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

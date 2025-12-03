import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Stats', to: 'stats' }, // Added Stats link if desired, or keep hidden
        { name: 'Education', to: 'education' },
        { name: 'Certifications', to: 'certifications' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Publications', to: 'publications' },
        { name: 'Achievements', to: 'achievements' },
        { name: 'Contact', to: 'contact' },
    ];

    // Filter out links that might clutter the navbar if needed, but for now showing all relevant ones
    // Adjusting list for better fit if too long
    const mainNavLinks = navLinks.filter(link => !['Stats', 'Achievements'].includes(link.name));
    // Actually, user specifically asked for Certifications. Let's include key ones.

    const displayLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Certifications', to: 'certifications' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Publications', to: 'publications' },
        { name: 'Achievements', to: 'achievements' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="fixed w-full bg-white/80 dark:bg-primary/90 backdrop-blur-md z-50 shadow-sm transition-colors duration-300">
            <div className="w-full px-6 md:px-12">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link to="home" smooth={true} duration={500} className="text-2xl font-bold text-accent">
                            Thilak<span className="text-gray-800 dark:text-white">.AI</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {displayLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                            >
                                {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-white hover:bg-accent focus:outline-none transition-all"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-primary shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {displayLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-3 py-2">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                            >
                                {theme === 'dark' ? <FaSun /> : <FaMoon />}
                                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

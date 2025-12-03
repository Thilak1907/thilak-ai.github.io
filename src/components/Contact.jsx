import React from 'react';
import Section from './Section';
import { personalInfo } from '../data/content';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch" className="bg-gray-50 dark:bg-primary">
            <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">

                <div className="md:w-1/2 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Feel free to reach out for collaborations, research opportunities, or just a friendly chat about AI!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                            <FaEnvelope className="text-accent" size={20} />
                            <span>{personalInfo.email}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                            <FaPhone className="text-accent" size={20} />
                            <span>{personalInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                            <FaLinkedin className="text-accent" size={20} />
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn Profile</a>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                            <FaGithub className="text-accent" size={20} />
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub Profile</a>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 bg-white dark:bg-secondary p-8 rounded-xl shadow-lg">
                    <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        const name = e.target.name.value;
                        const email = e.target.email.value;
                        const message = e.target.message.value;
                        window.location.href = `mailto:${personalInfo.email}?subject=Contact from Portfolio - ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                    }}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-primary text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-primary text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-primary text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 px-6 bg-accent hover:bg-accent-hover text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                            Send Message via Email
                        </button>
                    </form>
                </div>

            </div>
        </Section>
    );
};

export default Contact;

import React from 'react';
import Section from './Section';
import { projects } from '../data/content';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    return (
        <Section id="projects" title="Projects" className="bg-white dark:bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 dark:bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                        >
                            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors mx-2">
                                        <FaGithub size={32} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                                    <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </Section>
    );
};

export default Projects;

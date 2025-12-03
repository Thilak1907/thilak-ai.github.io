import React from 'react';
import Section from './Section';
import { skills } from '../data/content';
import { motion } from 'framer-motion';
import {
    FaPython, FaReact, FaDocker, FaDatabase, FaCode, FaBrain, FaTools
} from 'react-icons/fa';
import {
    SiTensorflow, SiPytorch, SiFlask, SiMongodb, SiFirebase, SiMlflow, SiScikitlearn, SiPandas, SiNumpy
} from 'react-icons/si';

// Helper to map skill names to icons
const getSkillIcon = (skillName) => {
    const lower = skillName.toLowerCase();
    if (lower.includes('python')) return <FaPython className="text-[#3776AB]" />;
    if (lower.includes('react')) return <FaReact className="text-[#61DAFB]" />;
    if (lower.includes('tensorflow')) return <SiTensorflow className="text-[#FF6F00]" />;
    if (lower.includes('pytorch')) return <SiPytorch className="text-[#EE4C2C]" />;
    if (lower.includes('flask')) return <SiFlask className="text-black dark:text-white" />;
    if (lower.includes('docker')) return <FaDocker className="text-[#2496ED]" />;
    if (lower.includes('mongo')) return <SiMongodb className="text-[#47A248]" />;
    if (lower.includes('firebase')) return <SiFirebase className="text-[#FFCA28]" />;
    if (lower.includes('mlflow')) return <SiMlflow className="text-[#0194E2]" />;
    if (lower.includes('scikit')) return <SiScikitlearn className="text-[#F7931E]" />;
    if (lower.includes('pandas')) return <SiPandas className="text-[#150458] dark:text-white" />;
    if (lower.includes('numpy')) return <SiNumpy className="text-[#013243] dark:text-white" />;
    return <FaCode className="text-gray-400" />;
};

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills" className="bg-gray-50 dark:bg-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-100 dark:border-gray-700">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                    {getSkillIcon(skill)}
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;

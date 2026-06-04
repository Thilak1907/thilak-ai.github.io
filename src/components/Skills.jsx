import React from 'react';
import Section from './Section';
import { skills } from '../data/content';
import { motion } from 'framer-motion';
import {
    FaPython, FaReact, FaDocker, FaDatabase, FaCode, FaBrain, FaTools, FaJava
} from 'react-icons/fa';
import {
    SiTensorflow, SiPytorch, SiFlask, SiMongodb, SiMlflow, SiScikitlearn, SiPandas, SiNumpy,
    SiNextdotjs, SiNestjs, SiFastapi, SiJavascript, SiHtml5, SiGit
} from 'react-icons/si';
import { FaCloud, FaCogs } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

// Helper to map skill names to icons
const getSkillIcon = (skillName) => {
    const lower = skillName.toLowerCase();
    if (lower.includes('python')) return <FaPython className="text-[#3776AB]" />;
    if (lower.includes('java')) return <FaJava className="text-[#5382a1]" />;
    if (lower.includes('sql')) return <FaDatabase className="text-[#00758F]" />;
    if (lower.includes('javascript')) return <SiJavascript className="text-[#F7DF1E] bg-black rounded" />;
    if (lower.includes('html') || lower.includes('css')) return <SiHtml5 className="text-[#E34F26]" />;
    if (lower.includes('react')) return <FaReact className="text-[#61DAFB]" />;
    if (lower.includes('tensorflow')) return <SiTensorflow className="text-[#FF6F00]" />;
    if (lower.includes('pytorch')) return <SiPytorch className="text-[#EE4C2C]" />;
    if (lower.includes('flask')) return <SiFlask className="text-black dark:text-white" />;
    if (lower.includes('docker')) return <FaDocker className="text-[#2496ED]" />;
    if (lower.includes('mongo')) return <SiMongodb className="text-[#47A248]" />;
    if (lower.includes('git')) return <SiGit className="text-[#F05032]" />;
    if (lower.includes('mlflow')) return <SiMlflow className="text-[#0194E2]" />;
    if (lower.includes('scikit')) return <SiScikitlearn className="text-[#F7931E]" />;
    if (lower.includes('pandas')) return <SiPandas className="text-[#150458] dark:text-white" />;
    if (lower.includes('numpy')) return <SiNumpy className="text-[#013243] dark:text-white" />;
    if (lower.includes('nextjs')) return <SiNextdotjs className="text-black dark:text-white" />;
    if (lower.includes('nestjs')) return <SiNestjs className="text-[#E0234E]" />;
    if (lower.includes('fastapi')) return <SiFastapi className="text-[#009688]" />;
    if (lower.includes('azure')) return <VscAzure className="text-[#0078D4]" />;
    if (lower.includes('runpod')) return <FaCloud className="text-[#00A3E0]" />;
    if (lower.includes('comfy ui') || lower.includes('comfyui')) return <FaCogs className="text-[#FF5722]" />;
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

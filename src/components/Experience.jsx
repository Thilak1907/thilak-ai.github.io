import React from 'react';
import Section from './Section';
import { experience } from '../data/content';
import { FaBriefcase } from 'react-icons/fa';
import { getAssetPath } from '../utils/helpers';

const Experience = () => {
    return (
        <Section id="experience" title="Experience" className="bg-gray-50 dark:bg-primary">
            <div className="relative container mx-auto px-6 flex flex-col space-y-8">
                <div className="absolute z-0 w-2 h-full bg-gray-200 dark:bg-gray-700 left-9 md:left-1/2 transform -translate-x-1/2"></div>
                {experience.map((exp, index) => (
                    <div key={index} className={`relative z-10 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="order-1 w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center z-20 absolute left-3 md:left-1/2 transform md:-translate-x-1/2">
                            <FaBriefcase className="text-white" />
                        </div>
                        <div className={`order-1 bg-white dark:bg-secondary rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                            <div className="flex gap-4 items-start mb-2">
                                {exp.image && (
                                    <img
                                        src={getAssetPath(exp.image)}
                                        alt={exp.company}
                                        className="w-12 h-12 object-contain bg-white rounded-lg p-1 shadow-sm border border-gray-100 flex-shrink-0"
                                    />
                                )}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-800 dark:text-white text-xl leading-tight">{exp.role}</h3>
                                    <h4 className="font-semibold text-accent text-md">{exp.company}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                                </div>
                            </div>
                            <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;

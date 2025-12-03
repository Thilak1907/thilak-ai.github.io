import React from 'react';
import Section from './Section';
import { education } from '../data/content';
import { FaGraduationCap } from 'react-icons/fa';

const EducationCard = ({ edu }) => (
    <div className="bg-white dark:bg-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex gap-4 items-start border-l-4 border-accent h-full">
        <div className="flex-shrink-0">
            {edu.image ? (
                <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-20 h-20 object-contain bg-white rounded-lg p-1 shadow-sm border border-gray-100"
                />
            ) : (
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-accent">
                    <FaGraduationCap size={24} />
                </div>
            )}
        </div>
        <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
            <div className="flex flex-col mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="mb-1">{edu.year}</span>
                <span className="font-semibold text-accent">{edu.details}</span>
            </div>
        </div>
    </div>
);

const Education = () => {
    const [college, ...schools] = education;

    return (
        <Section id="education" title="Education" className="bg-gray-50 dark:bg-primary">
            <div className="space-y-6">
                {/* College - Full Width */}
                <div className="max-w-4xl mx-auto">
                    <EducationCard edu={college} />
                </div>

                {/* Schools - Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
                    {schools.map((school, index) => (
                        <EducationCard key={index} edu={school} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Education;

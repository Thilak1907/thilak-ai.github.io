import React from 'react';
import Section from './Section';
import { personalInfo } from '../data/content';
import { getAssetPath } from '../utils/helpers';

const About = () => {
    return (
        <Section id="about" title="About Me" className="bg-white dark:bg-secondary">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/3">
                    <div className="w-full h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                        <img src={getAssetPath("/profile.jpg")} alt="About Me" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                    <p>
                        {personalInfo.intro}
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default About;

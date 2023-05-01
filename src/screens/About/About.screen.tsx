// Import Third-Party Modules
import React from 'react';
import { motion } from 'framer-motion';

// Import User-Defined Modules
import { IAboutProps } from '../../types/screens/About.types';
import './About.scss';
import { images } from '../../constants';

/**
 * About section details object array
 */
const aboutsObjectArray = [
  {
    title: 'Full Stack Software Developer',
    description:
      'I have knowledge about optimized backend and frontend development for mordern web designs. ',
    imageURL: images.about01,
  },
  {
    title: 'Cyber Security Enthusiast',
    description:
      'I have keen interest about security realted development and curious about Digital Forensics',
    imageURL: images.about02,
  },
  {
    title: 'Web3 & Blockchain Development Enthusiast',
    description:
      'Understand the architecture of decentralized development and maintain scalable blockchain systems.',
    imageURL: images.about03,
  },
  {
    title: 'Robitic Engineering Enthusiast',
    description:
      'I am always fascinated by how artificial machines are part of our daily life.',
    imageURL: images.about04,
  },
];

/**
 * This component is the collection of all the simple UI components
 * needed for About screen component.
 * @returns
 */
export const About: React.FC<IAboutProps> = () => {
  return (
    <>
      <h2 className="head-text">
        I know that
        <span>Scalable Development</span>
        <br />
        means
        <span>Modern Development</span>
      </h2>
      <div className="app__profiles">
        {aboutsObjectArray.map((aboutItem, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={`${aboutItem.title}-${index}`}
          >
            <img src={aboutItem.imageURL} alt={aboutItem.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {aboutItem.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {aboutItem.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

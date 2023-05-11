// Import Third-Party Modules
import React from 'react';
import { motion } from 'framer-motion';

// Import User-Defined Modules
import { IHeaderProps } from '../../types/screens/Header.types';
import { images } from '../../constants';
import './Header.scss';
import { AppWrapper } from '../../wrapper/App.wrapper';

// Variants property for motion element
const variants = {
  whileInView: {
    opacity: [0, 1],
    scale: [0, 1],
    transistion: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

// Array containing all the images/logos to be used in circles div
const logoForHeaderCircles: Array<string> = [
  images.node,
  images.typescript,
  images.react,
];

/**
 * This component consists of all simple UI components
 * budled for Header Screen Component.
 * @returns Header Screen Component.
 */
const Header: React.FC<IHeaderProps> = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text "> Hi, I am</p>
              <h1 className="head-text">Basanta</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software Engineer</p>
            <p className="p-text">Full Stack Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_cirlce"
        />
      </motion.div>

      <motion.div
        variants={variants}
        whileInView={variants.whileInView}
        className="app__header-circles"
      >
        {logoForHeaderCircles.map((cirlce, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={cirlce} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper({ Component: Header, idName: 'home' });

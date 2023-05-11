// Import Third-Party Modules
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

// Import User-Defined Modules
import { images } from '../../constants';
import {
  INavBarProps,
  INavBarSectionList,
} from '../../types/components/NavBar.types';
import './NavBar.scss';

/**
 * Navigation Section Array List
 */
export const navigationSectionList: Array<INavBarSectionList> = [
  INavBarSectionList.Home,
  INavBarSectionList.About,
  INavBarSectionList.Work,
  INavBarSectionList.Skills,
  INavBarSectionList.Contact,
];

/**
 * This component consists of simple UI related to Navigation
 * Bar Component.
 * @returns Navigation Bar Component.
 */
export const NavBar: React.FC<INavBarProps> = () => {
  const [navBarMenuToggle, setNavBarMenuToggle] = useState<boolean>(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        {navigationSectionList.map((eachItem) => (
          <li className="app__flex p-text" key={`List-${eachItem}`}>
            <div />
            <a href={`#${eachItem}`}>{eachItem}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setNavBarMenuToggle(true)} />
        {navBarMenuToggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setNavBarMenuToggle(false)} />
            <ul>
              {navigationSectionList.map((eachItem) => (
                <li key={`menuList-${eachItem}`}>
                  <a
                    href={`#${eachItem}`}
                    onClick={() => setNavBarMenuToggle(false)}
                  >
                    {eachItem}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

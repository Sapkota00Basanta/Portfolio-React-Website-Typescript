// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import {
  INavBarProps,
  INavBarSectionList,
} from '../../types/components/NavBar.types';
import './NavBar.scss';
import { images } from '../../constants';

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
    </nav>
  );
};

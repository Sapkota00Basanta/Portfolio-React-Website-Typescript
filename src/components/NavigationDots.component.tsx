// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { INavigationDotsProps } from '../types/components/NavigationDots.types';
import { navigationSectionList } from './NavBar/NavBar.component';

/**
 * This module is responsible for handling the navigation dots compoenet.
 * @param param0 boolean value to check the current page navigation.
 * @returns Navigation dots.
 */
export const NavigationDots: React.FC<INavigationDotsProps> = ({ active }) => {
  return (
    <div className="app__navigation">
      {navigationSectionList.map((navigationItem, index) => (
        <a
          href={`#${navigationItem}`}
          className="app__navigation-dot"
          key={`${index}-${navigationItem}`}
          style={
            active === navigationItem ? { backgroundColor: '#313BAC' } : {}
          }
        />
      ))}
    </div>
  );
};

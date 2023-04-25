// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { INavBarProps } from '../../types/components/NavBar.types';
import './NavBar.scss';

/**
 * This component consists of simple UI related to Navigation
 * Bar Component.
 * @returns Navigation Bar Component.
 */
export const NavBar: React.FC<INavBarProps> = () => {
  return (
    <>
      <h1> Hello from NavBar Component.</h1>
    </>
  );
};

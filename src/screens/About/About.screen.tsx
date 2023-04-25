// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { IAboutProps } from '../../types/screens/About.types';
import './About.scss';

/**
 * This component is the collection of all the simple UI components
 * needed for About screen component.
 * @returns
 */
export const About: React.FC<IAboutProps> = () => {
  return (
    <>
      <h1> Hello from About Component</h1>
    </>
  );
};

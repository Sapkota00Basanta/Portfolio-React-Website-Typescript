// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { IFooterProps } from '../../types/screens/Footer.types';
import './Foooter.scss';

/**
 * This component consists of all the simple UI Components
 * bundled into Footer Screen Component.
 * @returns Footer Screen Component
 */
export const Footer: React.FC<IFooterProps> = () => {
  return (
    <>
      <h1> Hello from Footer Component</h1>
    </>
  );
};

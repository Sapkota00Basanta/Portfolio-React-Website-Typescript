// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { IHeaderProps } from '../../types/screens/Header.types';
import './Header.scss';

/**
 * This component consists of all simple UI components
 * budled for Header Screen Component.
 * @returns Header Screen Component.
 */
export const Header: React.FC<IHeaderProps> = () => {
  return (
    <>
      <h1> Hello from Header Component.</h1>
    </>
  );
};

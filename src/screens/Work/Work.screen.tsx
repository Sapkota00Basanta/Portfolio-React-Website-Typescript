// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { IWorkProps } from '../../types/screens/Work.types';
import './Work.scss';

/**
 * This component consists of all the simple UI components
 * bundled for Work Screen Component.
 * @returns Work Screen Component.
 */
export const Work: React.FC<IWorkProps> = () => {
  return (
    <>
      <h1> Hello from Work Screen Component.</h1>
    </>
  );
};

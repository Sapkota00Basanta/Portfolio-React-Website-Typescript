// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { IAppProps } from './types/App.types';

/**
 * This component is the main App Component
 * where we bundle all our sub components module.
 */
export const App: React.FC<IAppProps> = () => {
  return (
    <>
      <h1> Hello from App Component</h1>
    </>
  );
};

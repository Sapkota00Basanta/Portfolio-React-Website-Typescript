// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import './App.scss';
import { NavBar } from './components';
import { HeaderScreen, AboutScreen } from './screens';
import { IAppProps } from './types/App.types';

/**
 * This component is the main App Component
 * where we bundle all our sub components module.
 */
export const App: React.FC<IAppProps> = () => {
  return (
    <div className="app">
      <NavBar />
      <HeaderScreen />
      <AboutScreen />
      {/* <Work />
      <Skills />
      <Testimonials />
      <Footer /> */}
    </div>
  );
};

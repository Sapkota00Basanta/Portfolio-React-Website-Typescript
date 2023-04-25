// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import './App.scss';
import { NavBar } from './components';
import { About, Footer, Header, Skills, Testimonials, Work } from './screens';
import { IAppProps } from './types/App.types';

/**
 * This component is the main App Component
 * where we bundle all our sub components module.
 */
export const App: React.FC<IAppProps> = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

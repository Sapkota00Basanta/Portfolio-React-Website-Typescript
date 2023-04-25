// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { ITestimonialsProps } from '../../types/screens/Testimonials.types';
import './Testimonials.scss';

/**
 * This component consists of all simple UI components
 * bundled for Testimonials Screen Component.
 * @returns Testimonials Screen Component.
 */
export const Testimonials: React.FC<ITestimonialsProps> = () => {
  return (
    <>
      <h1> Hello from Testimonials Screen Component.</h1>
    </>
  );
};

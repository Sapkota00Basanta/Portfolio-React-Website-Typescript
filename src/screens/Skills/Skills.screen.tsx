// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { ISkillsProps } from '../../types/screens/Skills.types';
import './Skills.scss';

/**
 * This component consists of all simple UI components
 * bundled for Skills Screen Component.
 * @returns Skills Screen Component.
 */
export const Skills: React.FC<ISkillsProps> = () => {
  return (
    <>
      <h1>Hello from Skills Component.</h1>
    </>
  );
};

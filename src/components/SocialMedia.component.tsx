// Import Third-Party Modules
import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

// Import User-Defined Modules
import { ISocialMediaProps } from '../types/components/SocialMedia.types';

/**
 * This component is used to return the list of social media handles.
 * @returns Social Media content Component
 */
export const SocialMedia: React.FC<ISocialMediaProps> = () => {
  return (
    <div className="app__social">
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
};

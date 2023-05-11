// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { NavigationDots, SocialMedia } from '../components';
import { IAppWrapperInterfaceProps } from '../types/Wrapper/App.wrapper.types';

/**
 * This module is a higher order component which
 * is used to return other components for reuseablity.
 * @returns another function called Higher Order Component.
 */
export const AppWrapper = ({
  Component,
  idName,
  ClassNames,
}: IAppWrapperInterfaceProps) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${ClassNames}`}>
        <SocialMedia />

        {/* 
            Here we are wrapping all our pages or simple component with this wrapper.
        */}
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2023 BASANTA</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

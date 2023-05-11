// Import Third-Party Components
import React from 'react';

/**
 * This module contains all the type defination for App Wrapper Higher
 * Order Component.
 */
export interface IAppWrapperInterfaceProps {
  Component: React.FC;
  idName: string;
  ClassNames?: string;
}

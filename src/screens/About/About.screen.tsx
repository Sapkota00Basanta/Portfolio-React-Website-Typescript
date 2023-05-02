// Import Third-Party Modules
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import User-Defined Modules
import { IAboutObjectType, IAboutProps } from '../../types/screens/About.types';
import './About.scss';
import { images } from '../../constants';
import { sanityClientInstance, URLFor } from '../../utils/sanity.client';

/**
 * This component is the collection of all the simple UI components
 * needed for About screen component.
 * @returns
 */
export const About: React.FC<IAboutProps> = () => {
  const [aboutsData, setAboutsData] = useState<Array<IAboutObjectType>>([]);

  /**
   * Using UseEffect hook to only load the data from sanity
   * backend in the beginning.
   */
  useEffect(() => {
    try {
      const sanityBackendQuery = '*[_type == "about"]';
      sanityClientInstance
        .fetch(sanityBackendQuery)
        .then((data: Array<IAboutObjectType>) => {
          console.log(data);
          setAboutsData(data);
        })
        .catch((error: any) => {
          return new Error(
            `Error while fetching about section data, error details: ${error}`
          );
        });
    } catch (error) {
      console.log(
        `Error while fetching from sanity backendm, error details: ${error}`
      );
    }
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that
        <span>Scalable Development</span>
        <br />
        means
        <span>Modern Development</span>
      </h2>
      <div className="app__profiles">
        {aboutsData.map((aboutItem, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={`${aboutItem.title}-${index}`}
          >
            <img
              src={URLFor(aboutItem.imgUrl).toString()}
              alt={aboutItem.title}
            />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {aboutItem.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {aboutItem.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

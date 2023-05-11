// Import Third-Party Modules
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

// Import User-Defined Modules
import { IWorkProps, IWorkObjectTypes } from '../../types/screens/Work.types';
import './Work.scss';
import { AppWrapper } from '../../wrapper/App.wrapper';
import { URLFor, sanityClientInstance } from '../../utils/sanity.client';

const projectsCategoryArrayList = ['Backend', 'Frontend', 'Full-Stack', 'All'];

/**
 * This component consists of all the simple UI components
 * bundled for Work Screen Component.
 * @returns Work Screen Component.
 */
export const Work: React.FC<IWorkProps> = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [animateCard, setAnimateCard] = useState<
    Record<string, string | number>
  >({
    y: 0,
    opacity: 1,
  });
  const [works, setWorks] = useState<Array<IWorkObjectTypes>>([]);
  const [filterWork, setFilterWork] = useState<Array<IWorkObjectTypes>>([]);

  useEffect(() => {
    const sanityBackendQuery = '*[_type == "work"]';

    try {
      sanityClientInstance
        .fetch(sanityBackendQuery)
        .then((data: Array<IWorkObjectTypes>) => {
          setWorks(data);
          setFilterWork(data);
        });
    } catch (error) {
      console.log(`Error while fetching data using sanity client. ${error}`);
    }
  }, []);

  const handleWorkFilter = (item: string) => {};

  return (
    <>
      <h2 className="head-text">
        My creative
        <span> Portfolio </span>
        Collection
      </h2>
      <div className="app__work-filter">
        {projectsCategoryArrayList.map((item, index) => (
          <div
            key={`${index}-${item}`}
            onClick={handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={`${index}`}>
            <div className="app__work-img app__flex">
              <img src={URLFor(work.imgUrl).toString()} alt="Work Image" />
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrapper({ Component: Work, idName: 'work' });

import React from "react";
import cn from 'classnames';
import styles from './styles.module.css';

const SbExample = ({ title, children, storyUrl, gitUrl, showLinks, height }) => {
  return (
    <div className="flex flex-col not-prose rounded-md border border-solid border-[#D8E3EB] overflow-hidden mb-5">
      <div className={styles.storybookWrapper} style={{ height: `${height}px` }}>
        {children}
      </div>
      <div className="flex justify-between items-center bg-[#F0F6FA] border-0 border-t-2 border-solid border-[#D8E3EB] p-4">
        <h4 className="mb-0 font-semibold">{title}</h4>
        <div
        className={cn({
            'flex items-center': showLinks,
            'hidden': !showLinks,
          }
        )}
        >
          <a className="h-6 mx-3" href={storyUrl}>
            <img src="/img/storybookIcon.svg" alt="" />
          </a>
          <a className="h-6 mx-3" href={gitUrl}>
            <img src="/img/githubIcon.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SbExample;

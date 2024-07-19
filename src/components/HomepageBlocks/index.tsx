import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  linkUrl: string;
  linkText: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Components',
    Svg: require('@site/static/img/svg-components.svg').default,
    description: (
      <>
        Our components are a collection of interface elements that can be reused across the BrightUI design system.
      </>
    ),
    linkUrl: '/docs/category/web',
    linkText: 'See our components',
  },
  {
    title: 'Patterns',
    Svg: require('@site/static/img/svg-patterns.svg').default,
    description: (
      <>
        Make the most of our components by using our design patterns to address common design problems.
      </>
    ),
    linkUrl: '/docs/category/design-patterns',
    linkText: 'See our patterns',
  }
];

function Feature({ title, Svg, description, linkUrl, linkText }: FeatureItem) {
  return (
    <div className={clsx('group flex p-6 space-x-4 bg-white border border-gray-300 shadow rounded-xl lg:w-1/2 relative hover:shadow-xl')}>
      <a className="absolute inset-0" href={linkUrl}></a>
      <div className={styles.svgFrame}>
        <Svg role="img" />
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <span className="flex items-center self-end space-x-2">
          <span className="underline group-hover:no-underline text-primary-700" href={linkUrl}>{linkText}</span>
          <span><img className="transform rotate-90" src="/img/card-arrow.svg" /></span>
        </span>
      </div>
    </div>
  );
}

export default function HomepageBlocks(): JSX.Element {
  return (
    <div className="container">
      <div className="space-y-4 lg:px-8 sm:space-x-4 sm:flex sm:space-y-0">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
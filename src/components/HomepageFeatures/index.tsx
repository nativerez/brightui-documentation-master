import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  Logo: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  linkUrl: string;
  linkText: string;
  BgColor: string;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'Report a bug',
    Svg: require('@site/static/img/svg-bugs.svg').default,
    Logo: require('@site/static/img/logo-github.svg').default,
    description: (
      <>
        If you find any bugs in our components, report them on Github and we'll fix them as soon as possible. It's our highest priority to have BrightUI working as expected.
      </>
    ),
    linkUrl: 'https://github.com/brighthr/bright-ui/issues',
    linkText: 'Report bug on GitHub',
    BgColor: '#252a31'
  },
  {
    title: 'Get the Figma library',
    Svg: require('@site/static/img/svg-figma.svg').default,
    Logo: require('@site/static/img/logo-figma.svg').default,
    description: (
      <>
        All our components are available in Figma.
      </>
    ),
    linkUrl: 'https://www.figma.com/file/3dNASwqNXrYbGQyHsf1Sgg/Components%3A-Bright-UI?t=ayusbkWFEB6IZWVp-6',
    linkText: 'View BrightUI in Figma',
    BgColor: '#d1431a'
  },
  {
    title: 'Chat with us',
    Svg: require('@site/static/img/svg-slack.svg').default,
    Logo: require('@site/static/img/logo-slack.svg').default,
    description: (
      <>
        Slack is one of our main platforms for sharing. Everything important that is happening around BrightUI is published on Slack.
      </>
    ),
    linkUrl: 'https://brighthr.slack.com/archives/C02JU9WUGAH',
    linkText: 'Visit Slack Channel',
    BgColor: '#4a154b'
  },
];

function Feature({ title, Svg, Logo, description, linkUrl, linkText, BgColor }: FeatureItem) {
  return (
    <div className={`group flex flex-col p-8 text-white rounded-xl relative shadow hover:shadow-xl transition`} style={{ backgroundColor: BgColor }}>
      <a className="absolute inset-0" href={linkUrl}></a>
      <div className="flex-grow mb-8 space-y-4">
        <div className="flex items-center space-x-4">
          <div className={styles.iconSvgWrapper}>
            <Svg className={styles.iconSvg} role="img" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p>{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="px-6 py-3 text-white bg-white rounded-full bg-opacity-20 group-hover:bg-opacity-30">
          {linkText}
        </div>
        <div className={styles.logoSvgWrapper}>
          <Logo className={styles.logoSvg} role="img" />
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className='py-12'>
      <div className="container space-y-4">
        <h1 className="text-xl font-bold lg:text-2xl">Support</h1>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

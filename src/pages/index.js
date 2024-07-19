import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageBlocks from '@site/src/components/HomepageBlocks';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="mb-8 xl:-mb-24 lg:-mb-16">
      <div className="container">
        <div className="mt-12 overflow-hidden lg:flex lg:rounded-[30px] lg:bg-primary-50 lg:h-[550px] relative">
          <div className="space-y-8 lg:w-1/2 lg:prose-xl lg:pl-9 lg:pt-9">
            <div className="flex items-center space-x-2 not-prose">
              <img className="w-16" src="/img/logo.svg" />
              <h1 className="text-5xl font-bold">{siteConfig.title}</h1>
            </div>
            <p>{siteConfig.tagline}</p>
            <a className="inline-flex items-center px-6 h-[60px] space-x-4 text-xl font-bold text-white rounded-full bg-accent-500 hover:bg-accent-600 hover:text-white" href="/docs/getting-started/intro">
              <span>Get started</span>
              <img className="transform rotate-90" src="/img/card-arrow-white.svg" />
            </a>
          </div>
            {/* <picture>
              <source type="image/webp" sizes="(min-width: 1202px) 1202px, 100vw" srcSet="/img/7a820rocket.webp 301w,/img/7e5ferocket.webp 601w,/img/580c2rocket.webp 1202w" />
              <img data-main-image="" style={{ opacity: 1 }} sizes="(min-width: 1202px) 1202px, 100vw" decoding="async" loading="lazy" alt="orbit-rocket" src="/img/0f939rocket.png" srcSet="/img/c4b15rocket.png 301w,/img/4b9d5rocket.png 601w,/img/0f939rocket.png 1202w" />
            </picture> */}
            <picture className="absolute bottom-0 right-0 hidden xl:-bottom-24 lg:block lg:w-1/2">
              <source sizes="(min-width: 1202px) 1202px, 100vw" srcSet="/img/rocket-scene.svg 301w,/img/rocket-scene.svg 601w,/img/rocket-scene.svg 1202w" />
              <img sizes="(min-width: 1202px) 1202px, 100vw" alt="orbit-rocket" src="/img/rocket-scene.svg" srcSet="/img/rocket-scene.svg 301w,/img/rocket-scene.svg 601w,/img/rocket-scene.svg 1202w" />
            </picture>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <HomepageBlocks />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
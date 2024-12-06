import './style.less';

interface ResourceProps {
  title: string;
  description: string;
  href: string;
}

const Resource = (props: ResourceProps) => {
  return (
    <div className="main-resource">
      <div className="main-resource-title">
        <a href={props.href} target="_blank" rel="noreferrer">
          <span>{props.title}</span>
        </a>
      </div>
      <div className="main-resource-description">
        <span>{props.description}</span>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="main">
      <div className="main-logo">
        <img src="https://tilty.oss-cn-beijing.aliyuncs.com/assets/tilty/images/tilty_logo_round_color.png" />
      </div>
      <div className="main-title">
        <span>Get Started building Preact Plugins.</span>
      </div>
      <section className="main-section">
        <Resource
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          href="https://preactjs.com/tutorial"
        />
        <Resource
          title="Differences to React"
          description="If you're coming from React, you may want to check out our docs to see where Preact differs"
          href="https://preactjs.com/guide/v10/differences-to-react"
        />
        <Resource
          title="Learn Vite"
          description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://vitejs.dev"
        />
      </section>
    </div>
  );
};

export default Index;

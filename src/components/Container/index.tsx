import './style.less';

interface ContainerProps {
  children: JSXInternal.Element | JSXInternal.Element[];
}

const Index = (props: ContainerProps) => {
  const { children } = props;

  return (
    <div className="container">
      <div className="container-header">
        <div className="container-title">
          <span>Preact Plugin</span>
        </div>
        <div className="container-operation">
          <span className="container-operation-close" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Index;

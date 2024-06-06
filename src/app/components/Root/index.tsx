import React, { ReactNode } from 'react';

type RootProps = {
  children: ReactNode;
};

const Root: React.FC<RootProps> = ({ children }) => {
  return <div className="card-root">{children}</div>;
};

export default Root;
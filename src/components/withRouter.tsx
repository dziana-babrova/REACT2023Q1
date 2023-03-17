import React from 'react';
import { useLocation } from 'react-router-dom';

function withRouter<ComponentProps>(Component: React.FunctionComponent<ComponentProps>) {
  function ComponentWithRouterProp(props: ComponentProps) {
    const location = useLocation();
    return <Component {...props} location={location} />;
  }
  return ComponentWithRouterProp;
}

export { withRouter };

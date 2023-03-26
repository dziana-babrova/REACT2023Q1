import { Navigation } from 'components/navigation/Navigation';
import { withRouter } from 'components/withRouter';
import { WithRouterProps } from 'types/types';
import './header.scss';

const setTitle = (path: string) => {
  switch (path) {
    case '/': {
      return 'Home';
    }
    case '/about': {
      return 'About us';
    }
    case '/forms': {
      return 'Forms';
    }
    default: {
      return '404';
    }
  }
};

const Header = (props: WithRouterProps) => {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <h1 className="header__title">{setTitle(props.location.pathname)}</h1>
        <Navigation></Navigation>
      </div>
    </header>
  );
};

const HeaderWithRouter = withRouter(Header);

export { HeaderWithRouter };

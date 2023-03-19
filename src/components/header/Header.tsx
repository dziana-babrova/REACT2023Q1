import { Navigation } from 'components/navigation/Navigation';
import { withRouter } from 'components/withRouter';
import { HeaderProps } from 'types/types';
import './header.scss';

const setTitle = (path: string) => {
  switch (path) {
    case '/': {
      return 'Home';
    }
    case '/about': {
      return 'About us';
    }
    default: {
      return '404';
    }
  }
};

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <div className="header__title">{setTitle(props.location.pathname)}</div>
        <Navigation></Navigation>
      </div>
    </header>
  );
};

const HeaderWithRouter = withRouter(Header);

export { HeaderWithRouter };

import { withRouter } from 'components/withRouter';
import { NavLink } from 'react-router-dom';
import { setActiveFunction, headerProps } from 'types/types';
import './header.scss';

const setActive: setActiveFunction = ({ isActive }) =>
  isActive ? 'header-link header-link__active' : 'header-link';

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

const Header = (props: headerProps) => {
  return (
    <header className="header">
      <div className="header-wrapper wrapper">
        <div className="header-title">{setTitle(props.location.pathname)}</div>
        <div className="header-navigation">
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
          <NavLink to="/about" className={setActive}>
            About Us
          </NavLink>
        </div>
      </div>
    </header>
  );
};

const HeaderWithRouter = withRouter(Header);

export { HeaderWithRouter };

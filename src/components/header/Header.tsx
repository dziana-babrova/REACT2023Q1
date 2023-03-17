import { withRouter } from 'components/withRouter';
import { NavLink } from 'react-router-dom';
import { setActiveFunction, headerProps } from 'types/types';
import './header.scss';

const setActive: setActiveFunction = ({ isActive }) =>
  isActive ? 'header-link__active' : 'header-link';

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
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="/about" className={setActive}>
        About Us
      </NavLink>
      <div>{setTitle(props.location.pathname)}</div>
    </header>
  );
};

const HeaderWithRouter = withRouter(Header);

export { HeaderWithRouter };

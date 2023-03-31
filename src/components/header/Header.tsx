import { Navigation } from 'components/navigation/Navigation';
import { useLocation } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const location = useLocation();

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

  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <h1 className="header__title">{setTitle(location.pathname)}</h1>
        <Navigation></Navigation>
      </div>
    </header>
  );
};

export { Header };

import { NavLink } from 'react-router-dom';
import { SetActiveFunction } from 'types/types';

const setActive: SetActiveFunction = ({ isActive }) =>
  isActive ? 'header__link header__link_active' : 'header__link';

const Navigation = () => {
  return (
    <div className="header__navigation">
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="/about" className={setActive}>
        About Us
      </NavLink>
    </div>
  );
};

export { Navigation };

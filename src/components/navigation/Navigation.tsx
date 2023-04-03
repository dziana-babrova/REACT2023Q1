import { NavLink } from 'react-router-dom';

type SetActiveFunction = (props: { isActive: boolean; isPending: boolean }) => string | undefined;

const links = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/about',
    name: 'About Us',
  },
  {
    to: '/forms',
    name: 'Forms',
  },
];

const setActive: SetActiveFunction = ({ isActive }) =>
  isActive ? 'header__link header__link_active' : 'header__link';

const Navigation = () => {
  return (
    <div className="header__navigation">
      {links.map((link) => (
        <NavLink key={link.name} to={link.to} className={setActive}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export { Navigation };

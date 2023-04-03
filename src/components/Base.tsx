import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';

const Base = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export { Base };

import { Outlet } from 'react-router-dom';
import { HeaderWithRouter } from './header/Header';

const Base = () => {
  return (
    <div>
      <HeaderWithRouter></HeaderWithRouter>
      <Outlet />
    </div>
  );
};

export { Base };

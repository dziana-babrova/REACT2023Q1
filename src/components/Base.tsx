import { Outlet } from 'react-router-dom';
import { HeaderWithRouter } from './header/Header';

const Base = () => {
  return (
    <div>
      <HeaderWithRouter location={window.location}></HeaderWithRouter>
      <Outlet />
    </div>
  );
};

export { Base };

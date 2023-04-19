import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';

const Base = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { Base };

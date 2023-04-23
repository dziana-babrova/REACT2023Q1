import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

const Base = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export { Base };

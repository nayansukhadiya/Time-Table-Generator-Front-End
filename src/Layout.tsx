import { Outlet, Link } from 'react-router-dom';
import Header from './components/Header/Header';

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className='w-[90%] m-auto'>
      <Outlet />
      </div>
    </div>
  );
};

export default Layout;

import { Outlet, Link } from 'react-router-dom';
import Header from './components/Header/Header';

const Layout: React.FC = () => {
  return (
    <div>
     <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

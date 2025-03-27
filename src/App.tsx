import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

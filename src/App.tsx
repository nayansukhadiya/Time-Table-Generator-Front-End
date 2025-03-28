import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import FormPage from './pages/Form/FormPage';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ViewTimeTable from './pages/ViewTimeTable/ViewTimeTable';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='form' element={<FormPage />} />
        <Route path='table' element={<ViewTimeTable />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

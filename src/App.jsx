import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Homepage from './Pages/Homepage';
import Layout from './layout/Layout';
import OurCoffee from './Pages/OurCoffee';
import Pleasure from './Pages/Pleasure';
import NotFounded from './components/NotFounded';
import SinglePage from './components/SinglePage';

function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="ourCoffee" element={<OurCoffee />} />
          <Route path="ourCoffee/:cof" element={<SinglePage/>} />
          <Route path="pleasure" element={<Pleasure />} />
          <Route path="*" element={<NotFounded />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

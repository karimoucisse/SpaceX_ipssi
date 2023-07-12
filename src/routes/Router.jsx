import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navigation from '../layout/Navigation';
import HistoriesList from '../pages/HistoriesList';
import Rockets from '../pages/Rockets';
import Page404 from './Page404';
import Crews from '../pages/Crews';
import Crew from '../pages/Crew';
const Router = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/crews" element={<Crews />} />
          <Route path="/crew/:id" element={<Crew />} />
          <Route path="/histories" element={<HistoriesList />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navigation from '../layout/Navigation';
import HistoriesList from '../pages/HistoriesList';
import Rockets from '../pages/Rockets';
const Router = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/histories" element={<HistoriesList />} />
          <Route path="/rockets" element={<Rockets />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Router;

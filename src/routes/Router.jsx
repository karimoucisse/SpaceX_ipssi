import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navigation from '../layout/Navigation';
import HistoriesList from '../pages/HistoriesList';
const Router = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/histories" element={<HistoriesList />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Router;

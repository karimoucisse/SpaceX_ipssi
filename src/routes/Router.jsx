import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navigation from '../layout/Navigation';
import HistoriesList from '../pages/HistoriesList';
import Rockets from '../pages/Rockets';
import Page404 from './Page404';
import Crews from '../pages/Crews';
import Crew from '../pages/Crew';
import Quizz from '../pages/Quizz';
import Quizzs from '../pages/Quizzs';
import Rocket from '../pages/Rocket';
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
          <Route path="/quizz" element={<Quizzs />} />
          <Route path="/quizz/:id" element={<Quizz />} />
          <Route path="/rocket/:id" element={<Rocket />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Router;

import { Route, Routes } from 'react-router-dom';

import PageLayout from '../components/molecules/layout/rootLayout';
import About from '../views/About';
import Families from '../views/Families';
import Home from '../views/Home';
import Plant from '../views/Plant';
import Sarkvevi from '../views/Sarkvevi';
import ThesisAndAntithesis from '../views/ThesisAndAntithesis';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sarkvevi" element={<Sarkvevi />} />
        <Route path="/about-project" element={<About />} />
        <Route path="/families" element={<Families />} />
        <Route path="/thesisandantithesis" element={<ThesisAndAntithesis />} />
        <Route path="/plant/:id" element={<Plant />} />
      </Route>
    </Routes>
  );
}

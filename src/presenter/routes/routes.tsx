import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import PageLayout from '../components/molecules/layout/rootLayout';
import Sarkvevi from '../views/Sarkvevi';
import About from '../views/About';
import Families from '../views/Families';
import Plant from '../views/Plant';
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

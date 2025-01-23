import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import PageLayout from '../components/molecules/layout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

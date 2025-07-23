import { Outlet } from 'react-router';

import Footer from '../footer';
import Header from '../header';

export default function PageLayout() {
  return (
    <>
      <Header />
      <main className="flex flex-grow flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

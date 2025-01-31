import { Outlet } from 'react-router';
import Header from '../header';
import Footer from '../footer';

export default function PageLayout() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

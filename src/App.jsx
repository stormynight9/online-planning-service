import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import ScrollToTop from './components/shared/ScrollToTop';
import DataContext from './context/data-context';
import UserContext from './context/user-context';
import ActivitiesPage from './pages/ActivitiesPage';
import ActivityPage from './pages/ActivityPage';
import CategoriesPage from './pages/CategoriesPage';
import CheckoutPage from './pages/CheckoutPage';
import Home from './pages/Home';
import Programme from './pages/Programme';
import ProviderBookedActivityListPage from './pages/ProviderBookedActivityListPage';
import ProviderPage from './pages/ProviderPage';

function App() {

  const dataCtx = useContext(DataContext);
  const location = useLocation();

  return (
    <>
      {dataCtx.isLoaded && <div className='bg-gray-50'>
        {(location.pathname === '/add-activity' || location.pathname === '/booked-activity-list') ? <></> : <Navbar />}
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/programme' element={<Programme />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/categories/:categoryId' element={<ActivitiesPage />} />
          <Route path='/activities/:activityId' element={<ActivityPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/add-activity' element={<ProviderPage />} />
          <Route path='/booked-activity-list' element={<ProviderBookedActivityListPage />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
        <ToastContainer position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
          transition={Slide} />
        <Footer />
      </div>}
    </>
  );
}

export default App;

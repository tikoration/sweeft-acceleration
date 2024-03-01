import { RouteObject, Outlet } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import HistoryPage from '../pages/HistoryPage';
import ErrorPage from '../pages/ErrorPage';
import Header from '../components/Header';

const routes: RouteObject[] = [
    {
      path: '/',
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          element: <HistoryPage />,
          path: '/history',
        },
        {
          element: <ErrorPage />,
          path: '*',
        },
      ],
    }
  ]

  export default routes;
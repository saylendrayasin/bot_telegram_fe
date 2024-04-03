import { createBrowserRouter } from 'react-router-dom';
import PageLanding from './pages/PageLanding/PageLanding';
import PageHome from './pages/PageHome/PageHome';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLanding />,
  },
  {
    path: '/:id',
    element: <PageHome />,
  },
]);

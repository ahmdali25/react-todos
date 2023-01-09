import Layout from '../layouts/Layout';
import SignIn from '../views/SignIn';
import PrivateRoute from './PrivateRoute';

const router = ([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: '/v1', element: <PrivateRoute /> },
        {
          path: '/v1/signin',
          children: [{ index: true, element: <SignIn /> }],
        },
      ],
    },
]);

export default router;
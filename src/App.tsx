import ErrorPage from 'pages/ErrorPage'
import { ListPage } from 'pages/ListPage/ListPage'
import { RootPage } from 'pages/RootPage/RootPage'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <Navigate to='/list' replace />,
          },
          {
            path: '/list',
            element: <ListPage />,
          },
        ],
      },
    ],
    {
      basename: '/python-viz',
    }
  )
  return <RouterProvider router={router} />
}

export default App

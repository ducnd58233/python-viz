import ErrorPage from 'pages/ErrorPage'
import { ListPage } from 'pages/ListPage/ListPage'
import { QueuePage } from 'pages/QueuePage/QueuePage'
import { RootPage } from 'pages/RootPage/RootPage'
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom'

function App() {
  const router = createHashRouter(
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
          {
            path: '/queue',
            element: <QueuePage />,
          },
        ],
      },
    ]
  )
  return <RouterProvider router={router} />
}

export default App

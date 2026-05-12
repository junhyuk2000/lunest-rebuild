import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Sleep from '../pages/Sleep'
import Rest from '../pages/Rest'
import Recommend from '../pages/Recommend'
import TodayRecord from '../pages/TodayRecord'
import Favorite from '../pages/Favorite'
import Brand from '../pages/Brand'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sleep', element: <Sleep /> },
      { path: 'rest', element: <Rest /> },
      { path: 'recommend', element: <Recommend /> },
      { path: 'today-record', element: <TodayRecord /> },
      { path: 'favorite', element: <Favorite /> },
      { path: 'brand', element: <Brand /> },
    ],
  },
])

export default router
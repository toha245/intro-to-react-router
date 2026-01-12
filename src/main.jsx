import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Home from './compnents/Home/Home.jsx'
import Mobiles from './compnents/Mobiles/Mobiles.jsx'
import Root from './compnents/Root/Root.jsx'
import Laptops from './compnents/Laptops/Laptops.jsx'
import Users from './compnents/Users/Users.jsx'
import Users2 from './compnents/Users2/Users2.jsx'
import UserDetails from './compnents/UserDetails/UserDetails.jsx'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then (res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: "mobiles", Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {path: 'users', 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users},
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading....</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch('https://jsonplaceholder.typicode.com/users'), 
        Component: UserDetails
      }
    ]
  },
  {
    path: 'about',
    element: <div>About me here</div>
  },
  {
    path: 'blogs',
    element: <div>All my blogs are here</div>
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: 'app2',
    // element: <App></App>
    Component: App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

const ROUTER = createBrowserRouter([
  {
    element:
      (
        <>
          <Outlet />
        </>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        }
      ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={ROUTER}/>
      <ToastContainer />
    </>
  )
}

export default App

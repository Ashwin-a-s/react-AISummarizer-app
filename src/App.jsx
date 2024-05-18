import React from 'react';
import Home from './pages/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import History from './components/History';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={ <Home /> } />
      <Route path='/history' element={ <History />} />
    </Route>
  )
)

const App = () => {

  return (
      <RouterProvider router={router} />
  )
}

export default App
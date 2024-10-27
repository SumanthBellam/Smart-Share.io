import { useState } from 'react'
import './index.css'
import AppLayout from './components/AppLayout'
import { createHashRouter, RouterProvider } from "react-router-dom";
import Profile from  './pages/Profile/Profile'
import Home from './pages/Home/Home'
import Posting from './pages/Posting/Posting'
import Support from './pages/Support/Support'

import "@fontsource/roboto/300.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/posting",
    element: <Posting />,
  },
  {
    path: "/support",
    element: <Support />,
  }
]);

function App() {

  return (
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  )
}

export default App

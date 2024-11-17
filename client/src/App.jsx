import { useState } from 'react'
import './index.css'
import AppLayout from './components/AppLayout'
import { createHashRouter, RouterProvider, Router } from "react-router-dom";
import Profile from  './pages/Profile/Profile'
import Home from './pages/Home/Home'
import Posting from './pages/Posting/Posting'
import SearchBar from './components/SearchBar';
import Landing from './pages/Landing/Landing';

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
    path: "/landing",
    element: <Landing />,
  }
]);

function App() {

  return (
      <AppLayout>
        <SearchBar />
        <RouterProvider router={router} />
      </AppLayout>
  )
}

export default App

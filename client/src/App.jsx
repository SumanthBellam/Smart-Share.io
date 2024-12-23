import { useState } from 'react'
import './index.css'
import AppLayout from './components/AppLayout'

import "@fontsource/roboto/300.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Profile from  './pages/Profile/Profile'
import Home from './pages/Home/Home'
import Posting from './pages/Posting/Posting'
import Landing from './pages/Landing/Landing';

import { Routes, Route } from "react-router-dom";

/**
 * The main app component, has all the routes.
 * @returns {ReactElement} The rendered App component
 */
const App = () => {

  return (
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posting/:id" element={<Posting />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </AppLayout>
  )
}

export default App

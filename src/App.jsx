import { useState } from 'react'
import './index.css'
import AppLayout from './components/AppLayout'
import { Route, Routes } from "react-router-dom";
import Profile from  './pages/Profile/Profile'
import Home from './pages/Home/Home'

import "@fontsource/roboto/300.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  return (
    <AppLayout>
      <div>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/profile" element={<Profile />} />



          <Route path="*" element={<Home />} />

        </Routes>
      </div>
    </AppLayout>
  )
}

export default App

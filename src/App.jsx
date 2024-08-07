import { useState } from 'react'

import Layout from './components/Layout'
import CustomerFeedback from './components/feedback/CustomerFeedback'
import Goals from './components/Goals';
import PopularDishes from './components/PopularDishes';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Menu from './components/Menu';
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Layout />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/popular" element={<PopularDishes />} />
          <Route path="/menus" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

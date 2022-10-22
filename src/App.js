import React from 'react';
import Gallery from './Components/Pages/Gallery/Gallery'
import Homepage from './Components/Pages/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './Components/Pages/NotFoundPage/NotFoundPage';
import { Layout } from './Components/Layout';


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={< Homepage />} />
          <Route index path='train' element={< Gallery />} />
          <Route index path='*' element={< NotFoundPage/>} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
import React from 'react';
import Gallery from './Components/Gallery';
import Homepage from './Components/Homepage';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage';
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
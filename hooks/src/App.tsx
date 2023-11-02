import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.scss'
import { Sum } from './pages/JSX/JSX';
import { Gallery } from './pages/State/State';
import { Layout } from './components/layouts/DefaultLayout';
import { Prop } from './pages/Prop/Prop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/jsx" element={<Sum />} />
            <Route path="/state" element={<Gallery />} />
            <Route path="/prop" element={<Prop/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

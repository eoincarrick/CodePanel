//React Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Page imports
import Home from './pages/Home';

//Style Imports
import css from './styles/App.module.css';

const App = () => {
  return (
    <div className={css.app}>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

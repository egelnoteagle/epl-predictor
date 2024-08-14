import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/predict" element={<div>Predict</div>} />
      </Routes>
    </Router>
  );
}

export default App;
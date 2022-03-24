import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../view/Home';
import AddTodo from '../view/AddTodo';
import EditTodo from '../view/EditTodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

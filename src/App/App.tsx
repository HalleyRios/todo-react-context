import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../view/Home';
import AddTodo from '../view/AddTodo';
import EditTodo from '../view/EditTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

function App() {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

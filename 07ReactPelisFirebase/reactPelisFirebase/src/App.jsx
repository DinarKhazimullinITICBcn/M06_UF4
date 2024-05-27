import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IndexMenu from './pages/IndexMenu';
import MoviesList from './pages/MoviesList';
import MoviesAdd from './pages/MoviesAdd';
import './components/style/styles.css';

const App = () => {
  return (
    <Router>
      <nav className='navegador'>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/movies/list">Movies List</Link></div>
          <div><Link to="/movies/add">Add Movie</Link></div>
      </nav>
      <Routes>
        <Route path="/" element={<IndexMenu />} />
        <Route path="/movies/list" element={<MoviesList />} />
        <Route path="/movies/add" element={<MoviesAdd />} />
      </Routes>
    </Router>
  );
};

export default App;
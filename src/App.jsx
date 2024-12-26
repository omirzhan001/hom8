import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './comp/header/Header'
import NewsList from './comp/newslist/NewsList'
import PostDetails from './comp/PostDetails.js/PostDetails'
function App() {
  return (
    <>
    <Header />
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App

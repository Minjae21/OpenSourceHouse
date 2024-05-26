// Developed by Minjae Jang 2024
// OpenSource House Project

import Header from './files/Header.jsx'
// import Footer from './Footer.jsx'
import Home from './files/Home.jsx'
import Project from './files/Project.jsx'
import Post from './files/Post.jsx'
import Login from './files/Login.jsx'
import Register from './Register.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

      return (
        <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
        </>
      );

}

export default App

      /* <Route path="/post" element={<Post/>} */
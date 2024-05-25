// Developed by Minjae Jang 2024
// OpenSource House Project

import Header from './Header.jsx'
// import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Project from './Project.jsx'
import Post from './Post.jsx'
import Login from './Login.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

      return (
        <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        {/* <Route path="/post" element={<Post/>}/>
        <Route path="/login" element={<Login/>}/> */}
      </Routes>
      </BrowserRouter>
        </>
      );

}

export default App

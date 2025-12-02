import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../Components/Navbar.css'

const MyNavbar = () => {
  return (
       <div>
    
<nav class="navbar navbar-expand-lg my-navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="Home.jsx" style={{fontFamily:'initial',color:'white'}}><span1>My</span1><span2>PoRtFoLiO</span2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{fontFamily:'cursive'}}>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> <Link class="space"to='/'style={{textDecoration:'none'}}>Home</Link></a>     
        </li>
        <li class="nav-item">
          <a  class="nav-link" href="#"> <Link class="space" to='/About' style={{textDecoration:'none'}}>About</Link></a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#"> <Link class="space" to='/skill' style={{textDecoration:'none'}}>Skills</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <Link class="space" to='/Projects'style={{textDecoration:'none'}}>Projects</Link></a>
          </li>
         <li class="nav-item">
          <a class="nav-link" href="#"> <Link class="space" to='/Education'style={{textDecoration:'none'}}>Education</Link></a>
          </li>
          
          <li class="nav-item">
          <a class="nav-link" href="#"> <Link class="space" to='/Contact' style={{textDecoration:'none'}}>Contact</Link></a>
        </li>
        
      
       
      </ul>
  
    </div>
  </div>
</nav>
  </div>
  );
};

export default MyNavbar;

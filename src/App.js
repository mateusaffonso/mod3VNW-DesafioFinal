import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import styled, { createGlobalStyle } from 'styled-components'
import Home from "./components/Home/index"
import About from "./components/About/index"
import Portfolio from "./components/portfolio/index"
import OnuPage from './components/Onu/index'
import logo_mat from './components/Home/images/logo.png'
import GlobalStyle from './styles/Global'


const Header = styled.header`
width: 100%;
/* height: 5rem; */
position: absolute;
z-index: 1;
border: 1px solid;
display: flex;
align-items: center;
justify-content: space-between;

padding-inline: 3rem;
background-color: orange;




nav ul {
  /* border: 1px solid; */
  width: 40rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  li {
    display: block;
    font-size: 1.7rem;
    list-style: none;
  }

  .link {
    display: block;
    padding: .5rem;
    text-decoration: none;
    color: black;
    /* border-radius: 20%; */
    
    :hover {
          color: brown;
          /* border: 1px solid black; */

          /* border: 1px solid brown; */
        }
  }

  

}

@keyframes loading {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}

img {
  /* border: 1px solid; */
  width: 5rem;
  padding: 0.5rem;
  animation: loading 9s linear infinite;
  
}

#btn-mobile{
    display: none;

  }

  @media (max-width: 700px) {

    #menu {
      display: block;
      position: absolute;
      width: 100%;
      top: 5rem;
      right: 0rem;
      background: orange ;
      height: 0rem;
      transition: .6s;
      z-index: 1000;
      visibility: hidden;
      overflow-y: hidden;

      li:hover {
        background-color: #c2c2c2;
        border: none;
        border-radius: 0%;
      }
      
    }

    #nav.active #menu {
      height: calc(100vh - 5rem);
      visibility: visible;
      overflow-y: auto;
      
    }

    .link {
      padding: 1rem 0;
      margin: 0 1rem;
      border-bottom: 2px solid rgba(0, 0, 0, .05);
      /* border: 1px solid ; */
    }

    #btn-mobile{
      display: flex;
      padding: .5rem 1rem;
      font-size: 1.2rem;
      border: none;
      background-color: none;
      cursor: pointer;
      gap: .5rem;
    }

    #hamburger {
      border-top: 2px solid;
      width: 20px;
    }

    #hamburger::after, #hamburger::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: currentColor;
      margin-top: 5px;
      transition: .3s;
      position: relative;
    }

    #nav.active #hamburger {
      border-top: transparent;
    }

    #nav.active #hamburger::before {
      transform: rotate(135deg);
    }

    #nav.active #hamburger::after {
      transform: rotate(-135deg);
      top: -7px;
      
    }

  }
`



export default function App(){

  const toggleMenu = () => {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')

  }

  // useEffect(() => {
  //   btnMobile.addEventListener('touchstart', toggle)
  // }, []) 

  return(
    <Router>
      <GlobalStyle />
      <Header>
        <img src={logo_mat}/>
        <nav id='nav'>
          <button id="btn-mobile" onClick={toggleMenu}>Menu
            <span id='hamburger'></span>
          </button>
          <ul id='menu'>
            <li><Link className='link' to='/mod3VNW-DesafioFinal' onClick={toggleMenu}>Home</Link></li>
            <li><Link className='link' to='/about' onClick={toggleMenu}>About</Link></li>
            <li><Link className='link' to='/portfolio' onClick={toggleMenu}>Portfólio</Link></li>
            <li><Link className='link' to='/onu' onClick={toggleMenu}>Onu Maré</Link></li>

          </ul>
        </nav>
      </Header>
      

      <Routes>
        <Route path='/mod3VNW-DesafioFinal' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/onu' element={<OnuPage/>}/>
      </Routes>
    </Router>
  )
}
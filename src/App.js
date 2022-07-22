import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import styled, { createGlobalStyle } from 'styled-components'
import Home from "./components/Home/index"
import About from "./components/About/index"
import Portfolio from "./components/portfolio/index"
import OnuPage from './components/Onu/index'
import logo_mat from './components/Home/images/logo_mat.png'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  :root {
    font-size: 62.5%;

    --darkmode-background:black;
    --darkmode-color:white


  }

  li {
    list-style: none;
    text-decoration: none;
  }

  Link{
    text-decoration: none;
  }

  body {
    /* background-color: var(--darkmode-background);
    color: var(--darkmode-color); */
    -webkit-text-stroke-width: 0.03rem;
    /* -webkit-text-stroke-color: #ff71f4; */
  }
}
`

const Header = styled.header`
height: 5rem;
/* border: 1px solid; */
display: flex;
align-items: center;
justify-content: space-between;

padding-inline: 3rem;
background-color: orange;

@keyframes loading {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}

nav ul {
  /* border: 1px solid; */
  width: 40rem;
  display: flex;
  gap: 4rem;

  li {
    font-size: 1.7rem;
    list-style: none;
    text-decoration: none;
    color: black;

    :hover {
      color: brown;
    }
    
  }

}

img {
  padding-top: 1rem;
  /* border: 1px solid; */
  width: 10rem;
  height: 10rem;
  animation: loading 10s linear infinite;
  
}
`

export default function App(){

  return(
    <Router>
      <GlobalStyle />
      <Header>
        <img src={logo_mat}/>
        {/* <h1>mateusaffonso</h1> */}
        <nav>
          <ul>
            <Link to='/mod3VNW-DesafioFinal/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/portfolio'><li>Portfólio</li></Link>
            <Link to='/onu'><li>Onu Maré</li></Link>

          </ul>
        </nav>
      </Header>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/onu' element={<OnuPage/>}/>
      </Routes>
    </Router>
  )
}
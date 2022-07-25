import React, {useState} from 'react'
import * as S from './style'
import {imagesWebSites} from './images/import'


export default function Portfolio(){

  const [repositories] = useState([
    {
      name: "Desafio Técnico - Vai na Web",
      image: imagesWebSites.DesafioVNWImg,
      repository:"https://github.com/mateusaffonso/VainaWebDesafioTecnico",
      link:"https://mateusaffonso.github.io/VainaWebDesafioTecnico/"
    },
    {
      name: "Desafio Pair Programming - Web site Recipes",
      image: imagesWebSites.recipesImg,
      repository:"https://github.com/mateusaffonso/mod3VNW-pairprogramming",
      link:"https://mateusaffonso.github.io/mod3VNW-pairprogramming/"
    },
    {
      name: "Desafio RocketSeat - NLW  Return Trilha Origin",
      image: imagesWebSites.imgNLW,
      repository:"https://github.com/mateusaffonso/NLWRETURNORIGIN",
      link:"https://mateusaffonso.github.io/NLWRETURNORIGIN/"
    },
    {
      name: "Cronômetro",
      image: imagesWebSites.cronometroImg,
      repository:"https://github.com/mateusaffonso/mod3VNW-cronometro",
      link:"https://mateusaffonso.github.io/mod3VNW-cronometro/"
    },
    {
      name: "Desafio Técnico - Dog API",
      image: imagesWebSites.imgDogAPI,
      repository:"https://github.com/mateusaffonso/mod3VNW-APIDog",
      link:"https://mateusaffonso.github.io/mod3VNW-APIDog/"
    },
    {
      name: "TodoFlix",
      image: imagesWebSites.imgTodoflix,
      repository:"https://github.com/mateusaffonso/mod2VNMDesafioFinal",
      link:"https://mateusaffonso.github.io/mod2VNMDesafioFinal"
    },
  ])


  return(
    <S.Port>
      <h2>Portfólio</h2> 
      <div className='projectsContainer'>
        {repositories.map((item)=> (
            <div className='project'>
              <img src={item.image}/>
              <div className='handleHover'>
                <h3>{item.name}</h3>
                <div className='buttons'>
                  <a href={item.repository} target='_blanck'>Repositório</a>
                  <a href={item.link} target='_blanck'>Site Online</a>
                </div>  
              </div>
              
            </div>

        ))}
      </div>

    </S.Port>
  )
}
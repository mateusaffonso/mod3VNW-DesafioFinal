import React from 'react'
import * as S from './style'
import mateusPhoto from './images/MateusPhoto.png'

export default function About() {


  
  return(
    <S.AboutContainer>
      <div className='infos'>
        <figure>
          <img src={mateusPhoto} alt='Foto de Mateus Augusto'/> 
        </figure>

      <div className='infoText'>

        <h2>About Me</h2>

        <p>A young black man, resident of Complexo da Maré
         (RJ), who loves people and technology. I have like
         purpose and dream to be able to reduce inequality
         joining my passion for people with my
         passion for technology.</p>


        <h2>Soft Skills</h2>

        <ul>
          <li>Communication</li>
          <li>Colaboration</li>
          <li>Adaptability</li>
          <li></li>
        </ul>
      </div>
        
      </div>

    
    </S.AboutContainer>
  )
}
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

        <p>Um Jovem negro, morador do Complexo da Maré
        (RJ), que ama pessoas e tecnologia. Tenho como
        propósito e sonho poder diminuir a desigualdade
        unindo minha paixão por pessoas com minha
        paixão por tecnologia.</p>


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
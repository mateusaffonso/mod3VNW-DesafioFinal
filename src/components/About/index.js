import React from 'react'
import * as S from './style'
import mateusPhoto from './images/MateusPhoto.png'

export default function About() {


  
  return(
    <S.AboutContainer>
      <img src={mateusPhoto} alt=''/>
      <div>

        <h2>About Me</h2>
        <p>Um Jovem negro, morador do Complexo da Maré
        (RJ), que ama pessoas e tecnologia. Tenho como
        propósito e sonho poder diminuir a desigualdade
        unindo minha paixão por pessoas com minha
        paixão por tecnologia.</p>
        
      </div>

    
    </S.AboutContainer>
  )
}
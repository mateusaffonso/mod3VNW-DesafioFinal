import React from 'react'
import  {images}  from './images/import'
import * as S from './style'


export default function Home(){


  return(
    <S.HomeContainer>
      <S.Photo>
        <img src={images.logo} alt="Foto de Mateus"/>
      </S.Photo>
      <div className='Identification'>
        <h1>Mateus Augusto</h1>
        <p>Software Developer | Front-end</p>
        <div className='iconContainer'>
          <a href=''><img src={images.react} alt='icone react' /></a>
          <a href=''><img src={images.javascript} alt='ícone javascript' /></a>
          <a href=''><img src={images.html} alt='icone html' /></a>
          <a href=''><img src={images.css} alt='icone css' /></a>

          {/* <a href=''><img src={instagram}/></a>
          <a href='https://www.linkedin.com/in/mateusaffonso/' target='_blanck'><img src={linkedin}/></a>
          <a href=''><img src={whatsapp}/></a> */}
          
        </div>
      </div>

    </S.HomeContainer>
  )
}
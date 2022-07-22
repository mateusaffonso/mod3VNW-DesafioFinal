import React, {useState} from 'react'
import mateusPhoto from './images/MateusPhoto.png'
import logo_mat from './images/logo_mat.png'
import  images  from './images/import'
import * as S from './style'


import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import whatsapp from './images/whatsapp.png'

export default function Home(){

  // const [imagesAbout] = useState(images)

  return(
    <S.HomeContainer>
      <S.Photo>
        <img src={mateusPhoto} alt="Foto de Mateus"/>
      </S.Photo>
      <div className='Identification'>
        <h1>Mateus Augusto</h1>
        <p>Software Developer | Front-end</p>
        <div className='iconContainer'>
          <a href=''><img src={instagram}/></a>
          <a href='https://www.linkedin.com/in/mateusaffonso/' target='_blanck'><img src={linkedin}/></a>
          <a href=''><img src={whatsapp}/></a>
          {/* <a href=''><img /></a> */}
        </div>
      </div>

    </S.HomeContainer>
  )
}
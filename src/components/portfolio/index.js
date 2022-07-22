import React, { useSate, useEffect } from 'react'
import axios from 'axios'
import DesafioTecnicoVNW from './Images/PreviewWebPage.png'
import * as S from './style'


export default function Portfolio(){

  // const [repositories, setRepositories] = useSate([])

  useEffect(() => {
    axios.get("https://api.github.com/users/mateusaffonso/repos").then((response) => { console.log(response.data)});
    // setRepositories(response.data.name)
  }, [])

  return(
    <S.Port>
      <h2>Portfólio</h2> 

      <div className='projectsContainer'>
        <div className='project'>
          
        </div>
      </div>
    </S.Port>
  )
}
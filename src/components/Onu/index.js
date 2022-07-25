import React, { useState } from 'react'
import { imagesCards } from './images/import'
import * as S from './style.js'
import Modal from './modal/modal.js'


export default function OnuPage(id="modal"){

  const [cards] = useState([
    {
      id:1,
      name: 'Erradicação da Pobreza',
      image: imagesCards.Erradicacao
    },
    {
      id:2,
      name: `Diminuição da Violência`,
      image: imagesCards.DiminuicaoViolencia
    },
    {
      id:3,
      name: `Maior acesso às oportunidades`,
      image: imagesCards.AcessoOportunidades
    },
    {
      id:4,
      name: ``,
      image: imagesCards.JusticaSocial
    }
  ])

  const [isModalVisible, setIsModalVisible] = useState(false)

  // const handleOutSideClick = (e) => {
  //   if(e.target.id === id) {setIsModalVisible(false)}
  // }

  return(
    <S.OnuContainer>
      <h2>Os Objetivos de Desenvolvimento Sustentável na Maré</h2>
      <p>Os objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e da prosperidade. estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>
      <div className='cardsContainer'>
        {cards.map((item) => (
          <div className='card' onClick={() => setIsModalVisible(true)}>
            <img src={item.image} alt={`card de ${item.name}`}/>
            
          </div>
          
        ))}
      </div>
      {isModalVisible ? (cards.map((item) => ( 
      // <S.Modal id="modal" onClick={(e) => setIsModalVisible(e.target.id === id ? setIsModalVisible(false) : setIsModalVisible(false) )}>
      //   <div className='container'>
      //     <button className='close' onClick={() => setIsModalVisible(false)}/>
      //    <div className="content"></div>
      //   </div>
      //   <h2>Modal do App</h2>
      // </S.Modal>)))
      <Modal>
        <h2>Modal do APP</h2>
      </Modal>))) : null}
    </S.OnuContainer>
  )
}
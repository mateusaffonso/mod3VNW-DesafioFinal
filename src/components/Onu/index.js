import React, { useState } from 'react'
import { imagesCards } from './images/import'
import * as S from './style.js'
import Modal from './modal/modal.js'


export default function OnuPage(){

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

  // const cardsFilter = (id) => {
  //   const cardFiltred = cards.filter(id == 1).map((item) => (item.name))
  // }

  return(
    <S.OnuContainer>
      <h2>The Sustainable Development Goals in Maré</h2>
      <p>The Sustainable Development Goals are a global call to action to end poverty, protect the environment and climate, and ensure that people everywhere can enjoy peace and prosperity. these are the goals to which the United Nations is contributing so that we can achieve the 2030 Agenda in Brazil.</p>
      <div className='cardsContainer'>
        {cards.map((item) => (
          <div id={item.id} className='card' onClick={() => setIsModalVisible(true)}>
            <img src={item.image} alt={`card de ${item.name}`}/>
            {isModalVisible ? (cards.map((item) => ( 
            <Modal id={item.id} onClose={(e) => setIsModalVisible(e.target.id === item.id ? setIsModalVisible(false) : setIsModalVisible(false))}>
              <h2>{item.name}</h2>
              <p>LoremIpsu </p>
            </Modal>))) : null}
          </div>
          
        ))}
      </div>
    </S.OnuContainer>
  )
}
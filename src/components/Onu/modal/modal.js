import React from 'react'
import * as S from './style.js'

const Modal = ({  onClose = () => {} , children }) => {
  return (
    <S.Modal className='modal'>
      <div className='container'>
        <button className='close'>close</button>
        <div className="content">{children}</div>
      </div>
    </S.Modal>
  )
}

export default Modal;
import React from 'react'
import * as S from './style.js'

const Modal = ({ id = 'modal', onClose = () => {} , children }) => {

  const handleOutSideClick = (e) => {
    if(e.target.id === id) onClose();
  }




  return (
    <S.Modal id={id} className='modal' onClick={handleOutSideClick}>
      <div className='container'>
        <button className='close' onClick={onClose} />
        <div className="content">{children}</div>
      </div>
    </S.Modal>
  )
}

export default Modal;
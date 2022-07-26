import styled from "styled-components";

export const Modal = styled.div`
border: 1px solid;
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: 20;
background-color: rgba(0, 0, 0);
opacity: 0.45;
display:flex;
justify-content: center;
align-items: center;


  .container {
    background-color: #ffff;
    color: #ffff;
    width: 60%;
    height: 60%;
    border-radius: 20px;
    color: #000;

    .close {
      background-color: transparent;
      border: none;
      outline: none;
      width: 32px;
      height: 32px;
      right: calc(-100% + 48px);
      top: 16px ;
      cursor: pointer;
      display: flex;
      position: relative;
      align-items: center;
      &:before,
      &:after {
        content:'';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000;
      }

      &:before {
        transform: rotate(45deg);

      }

      &:after {
        transform: rotate(-45deg);

      }
    }
  }

`
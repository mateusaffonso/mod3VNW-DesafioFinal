import styled from "styled-components";
import DesafioTecnicoVNW from './Images/PreviewWebPage.png'
export const Port = styled.div`
background-color: orange;
padding-left: 2rem;
h2 {
  padding-top: 2rem;
  font-size: 5rem;
}

  .projectsContainer {
    /* border:1px solid; */
    padding-top: 2rem;
    width: 100%;
    height: 60rem;
  }

  .project {
    border: 1px solid;
    width: 20rem;
    height: 20rem;
    background: url(${DesafioTecnicoVNW}) center no-repeat;
  }
`
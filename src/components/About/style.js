import styled from "styled-components";


export const AboutContainer = styled.div`
/* height: 100vh; */
background-color: orange;
padding-left: 2rem;
padding-top: var(--margin--pattern);

@media (max-width: 768px) {
  padding-inline: 1rem;
}




.infos{
  @media (max-width: 768px) {
  flex-wrap: wrap;
  
}

  /* border: solid 1px; */
  width: 100%;
  height: 50rem;
  display: flex;
  

  figure {
    width: 100%;
    height: 100%;
    /* border: 1px solid; */
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 32rem;
      height:38rem;
    }
  }
  
  .infoText{
    
    padding-top: 2rem;
    padding-left: 2rem;
    

    h2 {
      font-size: 5rem;
    }
    
    p{
      padding-inline: 2rem;
      font-size: 2rem;
      margin-block: 3rem;
    }

    hr{
      color: black;
    }

    ul {

      margin-block: 3rem;
      li {
        padding-left: 2rem;
        list-style: none;
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
    }
  }

}



  
`
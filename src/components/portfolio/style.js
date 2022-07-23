import styled from "styled-components";


export const Port = styled.div`
border: 2px solid;
width: 100%;
background-color: orange;
padding-left: 2rem;
padding-top: var(--margin--pattern);

h2 {
  padding-top: 2rem;
  font-size: 5rem;
}

  .projectsContainer {
    /* border:1px solid; */
    padding-top: 2rem;
    width: 100%;
    height: 60rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .project{
    border: 1px solid;
    width: 36rem;
    height: 26rem;
    position: relative;


    img {
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .handleHover {
      opacity: 0;
      border: 0.5px solid;
      height: 100%;
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      background-color: yellow;
      gap: 5rem;
      justify-content: center;
      align-items: center;
      
      h3{
        font-size: 1.5rem;
      }

      .buttons{
        display: flex;
        gap:5rem;

        a {
          width: 8rem;
          height: 3rem;
          background-color: white;
          border-radius: 25%;
          font-size: 1.4rem;

          display: flex;
          justify-content: center;
          align-items: center;

          text-decoration: none;
          color: black;

          &:hover {
            background-color: navajowhite;
          }
        }
      }

      &:hover{
        opacity: 1;
        transition: 1.7s;
      }

    }


  }
`
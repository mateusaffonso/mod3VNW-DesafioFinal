import styled from "styled-components";

export const HomeContainer = styled.div`
/* border: 2px solid; */
width: 100%;
height: 100vh;
/* max-height: 95vh; */
display: flex;
align-items: center;
justify-content: space-evenly;
text-align: center;
flex-wrap: wrap;
gap: 2rem;
background-color: orange;



.Identification{
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

   h1{
    font-size: 5.5rem;
   }

   p{
    font-size: 2.2rem;
   }

   .iconContainer{
    /* border: 1px solid; */
    width: 20rem;
    display: flex;
    justify-content: space-evenly;

    img {
      /* border: 1px solid; */
      width: 3rem;
    }

    svg {
    }
   }
}

`

export const Photo = styled.figure`
/* border: 2px solid; */
width: fit-content;

img{
  width: 25rem;
  border-radius: 30%;
}
`

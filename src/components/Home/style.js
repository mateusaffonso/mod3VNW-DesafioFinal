import styled from "styled-components";

export const HomeContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: space-evenly;
text-align: center;
flex-wrap: wrap;
gap: 2rem;
color: var(--color-normal);



.Identification{
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
    color: black;
   }

   .iconContainer{
    width: 20rem;
    display: flex;
    justify-content: space-evenly;

    img {
      width: 3rem;
    }

   }
}

`

export const Photo = styled.figure`
width: fit-content;

@media (max-width: 700px) {
  padding-top: 5rem;
}

img{
  width: 25rem;
}
`

import styled from "styled-components";


export const AboutContainer = styled.div`
height: 100vh;
background-color: orange;
padding-left: 2rem;
padding-top: var(--margin--pattern);

display: flex;
justify-content: center;
flex-wrap: wrap-reverse;

h2 {
  padding-top: 2rem;
  font-size: 4rem;
}

p{
  padding-top: 2rem;
  font-size: 2rem;
}

img {
  width: 30rem;
  height: 30rem;
}
  
`
import styled from "styled-components";

export const OnuContainer = styled.div`
  height: 100vh;
  background-color: orange;

  padding-left: 5rem;
  padding-top: var(--margin--pattern);
  
h2 {
  font-size: 3.5rem;
  padding-top: 2rem;
}

p {
  font-size: 2rem;
  margin-top: 3rem;
  word-spacing: 0.7rem;
  line-height: 3.3rem;
}

.cardsContainer {
  width: 100%;
  /* border: 1px solid; */
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 3rem;

  margin-top: 10rem;
  
}

.card {
  
  img {
    width: 20rem;
  }
}
`
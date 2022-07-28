import styled from "styled-components";

export const OnuContainer = styled.div`
  width: 100%;
  background-color: orange;
  padding-left: 5rem;
  padding-top: var(--margin--pattern);
  padding-bottom: 10rem;

  @media (max-width: 425px ) {
    padding-left: 0;
    padding-inline: 2rem;
  }
  
h2 {
  font-size: 4.5rem;
  padding-top: 2rem;
  color: var(--color-normal);
}

p {
  font-size: 2rem;
  margin-top: 3rem;
  word-spacing: 0.7rem;
  line-height: 3.3rem;
}

.cardsContainer {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 3rem;

  margin-top: 10rem;
  
}

.card {
  cursor: pointer;
  img {
    width: 20rem;
  }
}
`
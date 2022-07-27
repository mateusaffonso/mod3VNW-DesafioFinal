import { createGlobalStyle } from 'styled-components';
import OpenSans from './Fonts'
const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    --darkmode-background:black;
    --darkmode-color:white;

    --color-normal:#1E3047;

    --margin--pattern:5rem;


  }

  ${OpenSans}
  body {
    font: 1rem OpenSans, sans-serif;
    background-color: orange;
  }
`;

export default GlobalStyle;
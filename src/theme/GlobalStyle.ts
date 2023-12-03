import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // [NextJS Reset]
  html {
    
   
    min-height: 100vh;
    min-width: 100vw;
  }
  body{
    min-height: 100vh;
    min-width: 100vw;
  }
  #__next {
     min-height: 100vh;
    min-width: 100vw;
  }
  ul {
    list-style: none; 
    padding: 0; 
  }
  a {
    text-decoration: none;
    all: unset;
  }

  input {
    border: none ;
    background: none ;
  }

  input:focus {
    outline: none;
  }

  input::placeholder{
    color: #FFF5F5;
    opacity: 0.5;
  }


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;


export default GlobalStyle;

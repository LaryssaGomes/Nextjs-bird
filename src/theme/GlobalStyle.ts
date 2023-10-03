import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // [NextJS Reset]
  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    display: flex;
    flex: 1;
    flex-direction: column;   
  }
  #__next {
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }
  ul {
    list-style: none; 
    padding: 0; 
  }
  a {
    text-decoration: none;
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

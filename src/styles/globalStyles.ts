import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

/*
* Apenas reset do Browser.
*/

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: Helvetica, sans-serif;
    background-color: #f1f1f1;
  }

  #root {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  /*
  * Código responsavel por mudar o tema de cores.
  */
  :root {
    ${(props) => {
    const theme = props.theme;
    let append = '';
    Object.entries(theme).forEach(([prop, value]) => {
      append += `--${prop}: ${value};`;
    });
    return append;
  }}
  }

`;



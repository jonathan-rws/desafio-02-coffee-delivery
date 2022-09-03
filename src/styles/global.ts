import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 ;
  }
  body{
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
  }


  body, input-security, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    
  }

`

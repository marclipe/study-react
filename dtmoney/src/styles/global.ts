import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* font-size: 16px; (Desktop) */
  html {
    @media (max-width: 1000px){
      font-size: 93.75%; //16 x 0,975 = 15 pixels
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //16 x 0,875 = 14px
    }
  }

  body {
    background: ${props => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
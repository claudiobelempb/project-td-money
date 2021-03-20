import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --blue: #5429CC;
    --blue-linght: #6933FF;
    --success: #33CC95;
    --dranger: #E62E4D;
    --dark: #363F5F;
    --dark-linght: #969CB3;
    --white: #FFFFFF;
    --white-linght: #F0F2F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media(max-whith: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--white-linght);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: point;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
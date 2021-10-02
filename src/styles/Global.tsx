import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  
  :root {
    --light-black: #212529;
    --light-gray: #8D8F91;
    --white: #FFF;
    --red: #CC444B;

    font-size: 20px;

  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }
  
  body {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Open Sans', sans-serif;
    

  }
`

export default Global;
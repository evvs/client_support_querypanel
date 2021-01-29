import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    color: white;
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

img {
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyles;

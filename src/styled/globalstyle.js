import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  html,body,#root{
    width: 100%;
    height: 100%;
  }
`;

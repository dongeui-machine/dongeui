import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    * {
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default GlobalStyles;
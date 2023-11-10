import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Inter", sans-serif;
  }

  body {
    background-color: white;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #27AE60;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: #EDEDED;
    }
  }
`;

export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';

// Colors
export const colorMain = '#FDF18B';
export const colorDark = '#282828';
export const colorLight = '#FAFAFA';

export const colorMainHighlight = '#fadd83';

// Rating colors
export const colorScore0 = '#db2736';
export const colorScore1 = '#de3b3f';
export const colorScore2 = '#e24f47';
export const colorScore3 = '#e56450';
export const colorScore4 = '#e97858';
export const colorScore5 = '#ec8c61';
export const colorScore6 = '#efa069';
export const colorScore7 = '#f3b472';
export const colorScore8 = '#f6c97a';
export const colorScore9 = '#fadd83';
export const colorScore10 = '#FDF18B';

// Shadows
export const shadowDefault = '0 2px 2px 0 hsla(0, 0%, 0%, 0.2)';
export const shadowStrong = '0 2px 5px 0 hsla(0, 0%, 0%, 0.5)';

// Global Styles
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 16px;
    background: ${colorLight};
    color: ${colorDark};

    input, select, textarea, button {
        font-family: inherit;
    }

    *::-moz-selection { background: ${colorMain}; }
    *::selection { background: ${colorMain}; }
  }
`;

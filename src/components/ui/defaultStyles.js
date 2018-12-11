import { createGlobalStyle } from 'styled-components';

// Colors
export const colorMain = '#FDF18B';
export const colorWorst = '#db2736';
export const colorDark = '#282828';
export const colorLight = '#FAFAFA';

export const colorMainHighlight = '#fadd83';

// Shadows
export const shadowDefault = '0 2px 4px 0 hsla(0, 0%, 0%, 0.4)';
export const shadowStrong = '0 2px 6px 0 hsla(0, 0%, 0%, 0.6)';

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

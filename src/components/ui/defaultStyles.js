import { createGlobalStyle } from 'styled-components';

// Colors
export const colorMain = '#e42835';
export const colorDark = '#191414';
export const colorLight = '#FFFFFF';

export const colorMainHighlight = '#dd2835';

// Shadows
export const shadowDefault = '0 2px 4px 0 hsla(0, 0%, 0%, 0.4)';

// Global Styles
createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-size: 16px;
    background: ${colorDark};
    color: ${colorLight};

    input, select, textarea, button {
        font-family: inherit;
    }

    *::-moz-selection { background: ${colorMain}; }
    *::selection { background: ${colorMain}; }
  }
`;

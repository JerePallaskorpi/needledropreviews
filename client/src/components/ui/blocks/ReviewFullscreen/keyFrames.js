import { keyframes } from 'styled-components';

export const FadeInTrack = () => keyframes`
    0% {
        opacity: 0;
        transform: scale(.1);
    }

    85% {
        opacity: 1;
        transform: scale(1.05);
  }
    100% {
        transform: scale(1);
        opacity: 1;
  }
`;

export const FadeInOpacity = () => keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

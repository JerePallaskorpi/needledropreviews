import { keyframes } from 'styled-components';

export const makeItFullscreen = (x, y) => keyframes`
    // Works when responsive 1062 x 705, third album on right
    0% {
        position: fixed;
        right: 0;
        width: calc(50% - 1rem);
        top: calc(${y}px);
        height: 100px;
    } 50% {
        //top: calc(100px + 4rem);
        //position: fixed;
        //right: 0;
        //width: calc(100% - 1rem);
        //height: 100px;
    } 100% {
        //opacity: 0;
        position: fixed;
        top: 0;
        right: 0;
        width: calc(100% - 1rem);
        height: calc(100% - 1rem);
        margin: 0.5rem;
    }
`;

export const exitFullscreen = (x, y) => keyframes`
    0% {
        position: fixed;
        top: 0;
        right: 0;
        width: calc(100% - 1rem);
        height: calc(100% - 1rem);
        margin: 0.5rem;
    } 50% {
        //top: calc(100px + 4rem);
        //position: fixed;
        //right: 0;
        //width: calc(100% - 1rem);
        //height: 100px;
    } 100% {
        position: fixed;
        right: 0;
        width: calc(50% - 2rem);
        top: calc(${y - 48}px);
        height: 100px;
    }
`;

import { keyframes } from 'styled-components';
import { ratingDetails } from '../../utils/rating';

export const makeItFullscreen = (x, y) => keyframes`
    0% {
        position: fixed;
        max-width: calc(1100px - 2rem);
        right: 0;
        left: 0;
        margin: 0 auto;
        top: calc(${y}px);
        height: 100px;
    } 50% {
        top: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        max-width: 1100px;
    } 100% {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        max-width: 1100px;
        height: 100%;
        z-index: 1;
    }
`;

export const albumEnterFullscreen = rating => keyframes`
    0% {
        background: ${ratingDetails.some(r => r.score === rating)
            && ratingDetails.find(r => r.score === rating).color};
    } 100% {
        background: ${ratingDetails.some(r => r.score === rating)
        && ratingDetails.find(r => r.score === rating).color};
    }
`;

export const albumExitFullscreen = () => keyframes`
    0% {
        background: #FFFFFF;
    } 100% {
        background: #FFFFFF;
    }
`;

export const exitFullscreen = (x, y) => keyframes`
    0% {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
        background: #FFFFFF;
    } 100% {
        position: fixed;
        width: calc(100% - 2rem);
        left: 1rem;
        margin: 0 0.5rem;
        top: calc(${y}px - 5rem);
        height: 100px;
        background: #FFFFFF;
    }
`;

export const showDetails = () => keyframes`
    0% {
        opacity: 0;
    } 35% {
        opacity: 0;
    } 100% {
        opacity: 1;
    }
`;

export const exitDetails = () => keyframes`
    0% {
        opacity: 1;
    } 100% {
        opacity: 0;
    }
`;

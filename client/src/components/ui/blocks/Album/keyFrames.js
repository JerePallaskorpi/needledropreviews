// @flow
import { keyframes } from 'styled-components';
import { ratingDetails } from '../../../../utils/rating';

/**
 * Animation for fullscreening album review.
 *
 * @param {Object} originalPos Contains original elements position info.
 */
export const makeItFullscreen = (originalPos: Object) => keyframes`
    0% {
        position: fixed;
        background: #FFFFFF;
        height: 100px;
        width: ${originalPos.width}px;
        top: ${originalPos.top}px;
        bottom: ${window.innerHeight - originalPos.bottom}px;
        left: ${originalPos.left}px;
        right: ${window.innerWidth - originalPos.right}px;
        margin: 0 auto;
    } 50% {
        //height: 100px;
        //position: fixed;
        //top: calc(100% - 150px);
        //left: 0;
        //right: 0;
        //width: 100%;
        //margin: 0;
    } 100% {
        position: fixed;
        height: calc(100% - 50px);
        top: 50px;
        left: 0;
        right: 0;
        width: 100%;
        margin: 0;
    }
`;

/**
 * Animation for exiting fullscreen album review.
 *
 * @param {Object} originalPos Contains original elements position info.
 */
export const exitFullscreen = (originalPos: Object) => keyframes`
    0% {
        position: fixed;
        height: ${originalPos.height}px;
        top: calc(100% - 150px);
        left: 0;
        right: 0;
        width: 100%;
        margin: 0;
    } 100% {
        position: fixed;
        background: #FFFFFF;
        height: ${originalPos.height}px;
        width: ${originalPos.width}px;
        top: ${originalPos.top}px;
        bottom: ${window.innerHeight - originalPos.bottom}px;
        left: ${originalPos.left}px;
        right: ${window.innerWidth - originalPos.right}px;
        margin: 0 auto;
    }
`;

/**
 * Album's color animation when entering fullscreen.
 *
 * @param {number} rating Score for the album review.
 */
export const albumEnterFullscreen = (rating: number) => keyframes`
    0% {
        background: ${ratingDetails.some(r => r.score === rating)
            && ratingDetails.find(r => r.score === rating).color};
    } 100% {
        background: ${ratingDetails.some(r => r.score === rating)
            && ratingDetails.find(r => r.score === rating).color};
    }
`;

/** Album's background during exit fullscreen transition */
export const albumExitFullscreen = () => keyframes`
    0% {
        background: #FFFFFF;
    } 100% {
        background: #FFFFFF;
    }
`;

/** Smoother visualization for video wrapper during fullscreen transition */
export const showDetails = () => keyframes`
    0% {
        padding: 0;
        opacity: 0;
    } 35% {
        padding: 0;
        opacity: 0;
    } 75% {
        opacity: 0.75;
    } 100% {
        opacity: 1;
    }
`;

/** Smoother visualization for video wrapper during exit fullscreen transition */
export const exitDetails = () => keyframes`
    0% {
        opacity: 1;
    } 100% {
        opacity: 0;
    }
`;

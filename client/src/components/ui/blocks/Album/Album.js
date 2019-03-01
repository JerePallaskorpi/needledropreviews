import styled, { css } from 'styled-components';
import { ratingDetails } from '../../../../utils/rating';
import { albumEnterFullscreen, albumExitFullscreen } from '../../keyFrames';

const Album = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    border-radius: 5px;
    background: ${({ rating, fullscreen }) => fullscreen
    && ratingDetails.some(r => r.score === rating)
    && ratingDetails.find(r => r.score === rating).color};
    
    
    ${({ rating, fullscreen }) => fullscreen && css`
        -webkit-animation: ${albumEnterFullscreen(rating)} 0.5s;
        -moz-animation: ${albumEnterFullscreen(rating)} 0.5s;
        -o-animation: ${albumEnterFullscreen(rating)} 0.5s;
        animation: ${albumEnterFullscreen(rating)} 0.5s;
        display: flex;
    `};
    
    ${({ leaveFullscreen }) => leaveFullscreen && css`
        -webkit-animation: ${albumExitFullscreen()} 0.5s;
        -moz-animation: ${albumExitFullscreen()} 0.5s;
        -o-animation: ${albumExitFullscreen()} 0.5s;
        animation: ${albumExitFullscreen()} 0.5s;
        display: flex;
    `};
    
    &:hover {
        cursor: pointer;
        background: ${({ rating, fullscreen }) => (fullscreen
        ? '#ffffff'
        : ratingDetails.some(r => r.score === rating)
    && ratingDetails.find(r => r.score === rating).color)};
        
        @media only screen and (max-width: 764px) {
            background: ${({ rating, fullscreen }) => (fullscreen
        ? ratingDetails.some(r => r.score === rating)
    && ratingDetails.find(r => r.score === rating).color
        : '#FFFFFF')};
        } 
    }
    
    @media only screen and (max-width: 1100px) {
        height: 75px;
    }
`;

export default Album;

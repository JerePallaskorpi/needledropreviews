import styled from 'styled-components';
import { ratingDetails } from '../../../../utils/rating';
import * as styles from '../../defaultStyles';
import { FadeInAlbum } from './keyFrames';


const Album = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    border-radius: 5px;
    background: ${({ theme }) => theme.background};
    background: ${({ rating, fullscreen }) => fullscreen
    && ratingDetails.some(r => r.score === rating)
    && ratingDetails.find(r => r.score === rating).color};
            -webkit-animation: ${FadeInAlbum()} 0.4s forwards linear;
        -moz-animation: ${FadeInAlbum()} 0.4s forwards linear;
        -o-animation: ${FadeInAlbum()} 0.4s forwards linear;
        animation: ${FadeInAlbum()} 0.4s forwards linear;
    &:hover {
        cursor: pointer;
        background: ${({ rating, fullscreen }) => (fullscreen
        ? '#ffffff'
        : ratingDetails.some(r => r.score === rating)
                && ratingDetails.find(r => r.score === rating).color)};
        color: ${styles.colorDark};
        
        @media only screen and (max-width: 764px) {
            background: ${({ theme }) => theme.background};
            color: ${({ theme }) => theme.color};
        } 
    }
    
    @media only screen and (max-width: 1100px) {
        height: 75px;
    }
`;

export default Album;

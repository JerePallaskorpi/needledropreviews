import styled, { css } from 'styled-components';
import * as styles from '../../defaultStyles';
import { showDetails, exitDetails } from './keyFrames';

const VideoWrapper = styled.div`
    background: #fafafa;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    display: none;
    box-shadow: ${styles.shadowStrong}
    
    ${props => props.fullscreen && css`
        -webkit-animation: ${showDetails()} 0.5s forwards;
        -moz-animation: ${showDetails()} 0.5s forwards;
        -o-animation: ${showDetails()} 0.5s forwards;
        animation: ${showDetails()} 0.5s forwards;
        display: flex;
        box-shadow: ${styles.shadowStrong}
    `};

    ${props => props.leaveFullscreen && css`
        -webkit-animation: ${exitDetails()} 0.4s forwards;
        -moz-animation: ${exitDetails()} 0.4s forwards;
        -o-animation: ${exitDetails()} 0.4s forwards;
        animation: ${exitDetails()} 0.4s forwards;
        display: none;
    `};
    
    iframe {
        width: 100vw;
        height: 56.25vw;
        position: relative;

        &:before {
           content: '';
           display: block;
           padding-top: 56.25%;
        }
       
        @media only screen and (min-width: 750px) {
            height: 421.875px;
            width: 750px;
        }
    }
`;

export default VideoWrapper;

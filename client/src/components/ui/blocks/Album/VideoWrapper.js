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
        -webkit-animation: ${showDetails()} 1.2s forwards;
        -moz-animation: ${showDetails()} 1.2s forwards;
        -o-animation: ${showDetails()} 1.2s forwards;
        animation: ${showDetails()} 1.2s forwards;
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
        
        @media only screen and (max-width: 1100px) and (max-height: 500px) {
            position: fixed;
            left: 0;
            top: 50px;
            width: calc(50vw - 1rem);
            height: calc(100% - 125px);
        }
    }
`;

export default VideoWrapper;

import styled, { css } from 'styled-components';
import { showDetails, exitDetails } from '../../keyFrames';

const VideoWrapper = styled.div`
    background: black;
    flex: 1;
    position: relative;
    justify-content: center;
    align-items: center;
    
    ${props => props.fullscreen && css`
        -webkit-animation: ${showDetails()} 0.5s forwards;
        -moz-animation: ${showDetails()} 0.5s forwards;
        -o-animation: ${showDetails()} 0.5s forwards;
        animation: ${showDetails()} 0.5s forwards;
        display: flex;
    `};

    ${props => props.leaveFullscreen && css`
        -webkit-animation: ${exitDetails()} 0.4s forwards;
        -moz-animation: ${exitDetails()} 0.4s forwards;
        -o-animation: ${exitDetails()} 0.4s forwards;
        animation: ${exitDetails()} 0.4s forwards;
        display: none;
    `};
    
    iframe {
       height: 100%;
       max-width: 750px;
       width: 100%;
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       margin: 0 auto;

       &:before {
           content: '';
           display: block;
           padding-top: 56.25%;
       }
    }
`;

export default VideoWrapper;

import styled, { css } from 'styled-components';
import * as styles from '../../defaultStyles';
import { makeItFullscreen, exitFullscreen } from './keyFrames';

const SingleAlbumWrapper = styled.div`
    min-width: 500px;
    padding: 0;
    margin: 1rem;
    display: flex;
    flex: 1;
    box-shadow: ${styles.shadowDefault};
    border-radius: 5px;
    background: #FFFFFF;
    opacity: ${props => (props.hidden ? 0 : 1)};
    z-index: ${props => (props.hidden ? -1 : 'initial')};
    flex-direction: column;
    
    ${props => props.fullscreen && css`
        -webkit-animation: ${makeItFullscreen(props.fullscreen.originalPos)} 0.5s forwards;
        -moz-animation: ${makeItFullscreen(props.fullscreen.originalPos)} 0.5s forwards;
        -o-animation: ${makeItFullscreen(props.fullscreen.originalPos)} 0.5s forwards;
        animation: ${makeItFullscreen(props.fullscreen.originalPos)} 0.5s forwards;
        background: ${styles.colorLight};
        position: fixed;
        height: calc(100% - 50px);
        top: 50px;
        left: 0;
        right: 0;
        width: 100%;
        margin: 0;
        border-radius: 0;
    `};
    
    ${props => props.leaveFullscreen && css`
        -webkit-animation: ${exitFullscreen(props.leaveFullscreen.originalPos)} 0.5s;
        -moz-animation: ${exitFullscreen(props.leaveFullscreen.originalPos)} 0.5s;
        -o-animation: ${exitFullscreen(props.leaveFullscreen.originalPos)} 0.5s;
        animation: ${exitFullscreen(props.leaveFullscreen.originalPos)} 0.5s;
        position: fixed;
        background: #FFFFFF;
        height: ${props.leaveFullscreen.originalPos.height}px;
        width: ${props.leaveFullscreen.originalPos.width}px;
        top: ${props.leaveFullscreen.originalPos.top}px;
        bottom: ${window.innerHeight - props.leaveFullscreen.originalPos.bottom}px;
        left: ${props.leaveFullscreen.originalPos.left}px;
        right: ${window.innerWidth - props.leaveFullscreen.originalPos.right}px;
        margin: 0 auto;
    `};
    
    @media only screen and (max-width: 1100px) {
        height: 75px;
        min-width: 350px;
    }
    
    @media only screen and (max-width: 764px) {
        min-width: calc(100% - 2rem);
    }
`;

export default SingleAlbumWrapper;

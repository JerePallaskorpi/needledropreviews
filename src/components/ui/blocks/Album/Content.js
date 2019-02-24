import styled, { css } from 'styled-components';
import * as styles from '../../defaultStyles';
import { showDetails, exitDetails } from '../../keyFrames';

const Content = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    line-height: 2em;
    overflow: auto;
    background: ${styles.colorLight};
    max-width: 750px;
    margin: 0 auto;
    
    div {
      overflow: auto;
    }
    
    p {
        box-shadow: 0 1px 2px 0 hsla(0, 0%, 0%, 0.1);
        padding: 1em;
        margin: 2em 0;
        background: #FFFFFF;
        border-radius: 10px 0 0 10px;
    }
    
    p:first-of-type {
        border-left: 1rem solid ${styles.colorDark};
        padding-left: 1rem;
    }
    
    p:nth-of-type(2) {
        border-left: 1rem solid ${styles.colorMain};
        padding-left: 1rem;
    }
    
    p:last-of-type {
        border-left: 1rem solid ${styles.colorWorst};
        padding-left: 1rem;
    }
    
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
`;

export default Content;

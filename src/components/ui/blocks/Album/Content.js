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
    
    ${props => props.fullscreen && css`
        -webkit-animation: ${showDetails()} 0.5s forwards;
        -moz-animation: ${showDetails()} 0.5s forwards;
        -o-animation: ${showDetails()} 0.5s forwards;
        animation: ${showDetails()} 0.5s forwards;
        display: flex;
        margin-top: 1rem;
    `};

    ${props => props.leaveFullscreen && css`
        -webkit-animation: ${exitDetails()} 0.4s forwards;
        -moz-animation: ${exitDetails()} 0.4s forwards;
        -o-animation: ${exitDetails()} 0.4s forwards;
        animation: ${exitDetails()} 0.4s forwards;
        display: none;
    `};
`;

const Description = styled.div`

`;

const Favs = styled.div`
    :first-of-type {
        color: red;
    }
    
    color: blue;
`;

const LeastFavs = styled.div`

`;

Content.Description = Description;
Content.Description.Favs = Favs;

export default Content;

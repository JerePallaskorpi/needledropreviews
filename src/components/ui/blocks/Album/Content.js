import styled, { css } from 'styled-components';
import * as styles from '../../defaultStyles';
import { showDetails, exitDetails } from '../../keyFrames';

const Content = styled.div`
    display: none;
    flex-direction: row;
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
        padding: 0 1rem;
        margin-top: 0.5rem;
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
    padding: 0.5rem;
`;

const Tracks = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Summary = styled.div`
    p {
        :first-of-type {
            font-weight: 600;
        };
        
        margin: 0;
    };
    
    //padding: 0 1rem;
    //border-left: 5px solid ${styles.colorDark};
`;

const Favs = styled.div`
    p {
        :first-of-type {
            font-weight: 600;
        };
        
        margin: 0;
    };
    
    flex: 1;
    margin: 1rem 0;
    padding: 0 1rem;
    text-transform: capitalize;
    border-left: 5px solid ${styles.colorScore10};
`;

const LeastFavs = styled.div`
    p {
        :first-of-type {
            font-weight: 600;
        };
        
        margin: 0;
    };
    
    flex: 1;
    margin: 1rem 0;
    padding: 0 1rem;
    text-transform: capitalize;
    border-right: 5px solid ${styles.colorScore0};
    text-align: right;
`;

Content.Description = Description;
Content.Description.Tracks = Tracks;
Content.Description.Summary = Summary;
Content.Description.Favs = Favs;
Content.Description.LeastFavs = LeastFavs;

export default Content;

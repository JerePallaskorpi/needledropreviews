import styled, { css } from 'styled-components';
import { ratingDetails } from '../../../../utils/rating';
import * as styles from '../../defaultStyles';
import { makeItFullscreen, exitFullscreen } from '../../keyFrames';

const AlbumWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SingleAlbumWrapper = styled.div`
    min-width: 500px;
    padding: 0;
    margin: 1rem;
    display: flex;
    flex: 1;
    box-shadow: ${styles.shadowDefault};
    border-radius: 5px;
    background: #FFFFFF;
    opacity: ${props => (props.hidden ? 0 : 1)}
     
    
    ${props => props.fullscreen && css`
        -webkit-animation: ${makeItFullscreen(props.fullscreen.x, props.fullscreen.y)} 0.6s forwards;
        -moz-animation: ${makeItFullscreen(props.fullscreen.x, props.fullscreen.y)} 0.6s forwards;
        -o-animation: ${makeItFullscreen(props.fullscreen.x, props.fullscreen.y)} 0.6s forwards;
        animation: ${makeItFullscreen(props.fullscreen.x, props.fullscreen.y)} 0.6s forwards;
    `};
    
    ${props => props.leaveFullscreen && css`
        -webkit-animation: ${exitFullscreen(props.leaveFullscreen.x, props.leaveFullscreen.y)} 1s;
        -moz-animation: ${exitFullscreen(props.leaveFullscreen.x, props.leaveFullscreen.y)} 1s;
        -o-animation: ${exitFullscreen(props.leaveFullscreen.x, props.leaveFullscreen.y)} 1s;
        animation: ${exitFullscreen(props.leaveFullscreen.x, props.leaveFullscreen.y)} 1s;
    `}
    
    &:hover {
        cursor: pointer;
        box-shadow: ${styles.shadowStrong};
    }
    
    @media only screen and (max-width: 1100px) {
        height: 75px;
        min-width: 350px;
    }
    
    @media only screen and (max-width: 764px) {
        min-width: calc(100% - 2rem);
    }
`;

const Album = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    border-radius: 5px;
    
    @media only screen and (max-width: 1100px) {
        height: 75px;
    }
`;

const Cover = styled.div`
    height: 100px;
    width: 100px;
    min-width: 100px;
    padding: 0;
    border-radius: 5px 0 0 5px;
    
    ${({ thumbnail }) => css`
        background-image: url(${thumbnail});
        background-repeat: no-repeat;
        background-position: center; 
        background-size: cover;
    `};
    
    ${({ coverArt }) => css`
        div {
            background-image: url(${coverArt});
            background-repeat: no-repeat;
            background-position: center; 
            background-size: cover;
            border-radius: 5px 0 0 5px;
            height: 100%;
            width: 100%;
        }
    `};  
    
    @media only screen and (max-width: 1100px) {
        height: 75px;
        width: 75px;
        min-width: 75px;
    };
`;

const Text = styled.div`
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    letter-spacing: 1px;
    white-space: nowrap;
    overflow: hidden;
    
    span {
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    span:first-of-type {
        font-weight: bold;
    }
`;

const Rating = styled.div`
    width: 100px;
    min-width: 100px;
    height: 100px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #282828;
    font-size: 24px;
    border-radius: 0 5px 5px 0;
    background: ${({ rating }) => ratingDetails.some(r => r.score === rating)
        && ratingDetails.find(r => r.score === rating).color};
    
    @media only screen and (max-width: 1100px) {
        height: 75px;
        width: 75px;
        min-width: 75px;
    }
`;

AlbumWrapper.SingleAlbumWrapper = SingleAlbumWrapper;
AlbumWrapper.Album = Album;
AlbumWrapper.Album.Cover = Cover;
AlbumWrapper.Album.Text = Text;
AlbumWrapper.Album.Rating = Rating;

export default AlbumWrapper;

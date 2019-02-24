import styled, { css } from 'styled-components';
import { ratingDetails } from '../../../../utils/rating';
import * as styles from '../../defaultStyles';
import {
    makeItFullscreen,
    exitFullscreen,
    showDetails,
    exitDetails,
    albumEnterFullscreen,
    albumExitFullscreen,
} from '../../keyFrames';

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
    opacity: ${props => (props.hidden ? 0 : 1)};
    flex-direction: column;
    
    ${props => props.fullscreen && css`
        -webkit-animation: ${makeItFullscreen(props.fullscreen.originalPos)} 0.5s forwards;
        -moz-animation: ${makeItFullscreen(props.fullscreen.originalPos)} 0.5s forwards;
        -o-animation: ${makeItFullscreen(props.fullscreen.originalPos)} 0.5s forwards;
        animation: ${makeItFullscreen(props.fullscreen.originalPos)} 0.5s forwards;
    `};
    
    ${props => props.leaveFullscreen && css`
        -webkit-animation: ${exitFullscreen(props.leaveFullscreen.originalPos)} 0.5s;
        -moz-animation: ${exitFullscreen(props.leaveFullscreen.originalPos)} 0.5s;
        -o-animation: ${exitFullscreen(props.leaveFullscreen.originalPos)} 0.5s;
        animation: ${exitFullscreen(props.leaveFullscreen.originalPos)} 0.5s;
    `};
    
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

const Cover = styled.div`
    height: 100px;
    width: 100px;
    min-width: 100px;
    padding: 0;
    border-radius: 5px 0 0 5px;
    
    ${({ thumbnail, coverArt }) => css`
        background-color: ${styles.colorDark};
        background-image: url(${(coverArt ? 'https://66.media.tumblr.com/avatar_91da58554fa4_128.pnj' : thumbnail)});
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

const Content = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    line-height: 2em;
    overflow: auto;
    background: ${styles.colorLight};
    
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

AlbumWrapper.SingleAlbumWrapper = SingleAlbumWrapper;
AlbumWrapper.Album = Album;
AlbumWrapper.Album.Cover = Cover;
AlbumWrapper.Album.Text = Text;
AlbumWrapper.Album.Rating = Rating;
AlbumWrapper.Content = Content;
AlbumWrapper.VideoWrapper = VideoWrapper;

export default AlbumWrapper;

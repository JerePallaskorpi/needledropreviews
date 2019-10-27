import styled, { css } from 'styled-components';
import * as styles from '../../defaultStyles';
import { FadeInTrack, FadeInOpacity } from './keyFrames';

const Content = styled.div`
    flex-direction: row;
    justify-content: center;
    flex: 1;
    line-height: 2em;
    overflow: hidden;
    background: ${styles.colorLight};
    max-width: 750px;
    margin: 0 auto 100px;
    padding: 1rem;
    
    div {
        overflow: auto;
    }
    
    @media only screen and (max-width: 800px) {

    }
`;

const Description = styled.div`
    padding: 1rem;
    margin-bottom: 50px;
  
    p {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const Tracks = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    text-transform: capitalize;
    justify-content: center;
`;

const Track = styled.span`
    background: ${props => (props.fav ? styles.colorScore10 : styles.colorScore0)};
    color: ${props => (props.fav ? styles.colorDark : styles.colorLight)};
    box-shadow: 0 1px 1px 0 hsla(0, 0%, 0%, 0.1);
    margin: 0.25rem;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    transition: 3s;
    opacity: 0;
    transform: scale(0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    ${({ nthTrack }) => css`
        -webkit-animation: ${FadeInTrack()} 0.4s forwards linear;
        -moz-animation: ${FadeInTrack()} 0.4s forwards linear;
        -o-animation: ${FadeInTrack()} 0.4s forwards linear;
        animation: ${FadeInTrack()} 0.4s forwards linear;
        animation-delay: ${nthTrack * 0.1}s;
    `};
`;

const Summary = styled.div`
    line-height: 1.75rem;
    
    p {
        :first-of-type {
            font-weight: 600;
        };
        
        margin: 0;
    };
    
    -webkit-animation: ${FadeInOpacity()} 0.4s forwards linear;
    -moz-animation: ${FadeInOpacity()} 0.4s forwards linear;
    -o-animation: ${FadeInOpacity()} 0.4s forwards linear;
    animation: ${FadeInOpacity()} 0.4s forwards linear;
    animation-delay: 0s;
`;

const Date = styled.div`
    color: ${({ theme }) => theme.colorGray};
    padding-bottom: 0.5rem;
    
    -webkit-animation: ${FadeInOpacity()} 0.4s forwards;
    -moz-animation: ${FadeInOpacity()} 0.4s forwards;
    -o-animation: ${FadeInOpacity()} 0.4s forwards;
    animation: ${FadeInOpacity()} 0.4s forwards;
    animation-delay: 0s;
`;

const Album = styled.div`
    display: flex;
    padding-bottom: 1rem;
`;

const Cover = styled.div`
    height: 75px;
    width: 75px;
    min-width: 75px;
    padding: 0;
    box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
    border-radius: 6px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    ${({ thumbnail, coverArt }) => css`
        background-color: ${styles.colorDark};
        background-image: url(${(coverArt ? 'https://66.media.tumblr.com/avatar_91da58554fa4_128.pnj' : thumbnail)});
        background-repeat: no-repeat;
        background-position: center; 
        background-size: cover;
    `};
    
    -webkit-animation: ${FadeInOpacity()} 0.4s forwards;
    -moz-animation: ${FadeInOpacity()} 0.4s forwards;
    -o-animation: ${FadeInOpacity()} 0.4s forwards;
    animation: ${FadeInOpacity()} 0.4s forwards;
    animation-delay: 0s;
`;

const Art = styled.div.attrs(props => ({
    style: {
        backgroundImage: `url(${props.coverArt})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        borderRadius: '5px',
    },
}))`
`;

const Text = styled.div`
    width: 100%;
    padding: 0.25rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    letter-spacing: 1px;
    white-space: nowrap;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    span {
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    span:first-of-type {
        font-weight: bold;
    }
`;

const Rating = styled.div`
    width: 75px;
    min-width: 75px;
    height: 75px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: ${({ theme }) => theme.color};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    -webkit-animation: ${FadeInOpacity()} 0.4s forwards;
    -moz-animation: ${FadeInOpacity()} 0.4s forwards;
    -o-animation: ${FadeInOpacity()} 0.4s forwards;
    animation: ${FadeInOpacity()} 0.4s forwards;
    animation-delay: 0s;
`;

Content.Description = Description;
Content.Description.Tracks = Tracks;
Content.Description.Tracks.Track = Track;
Content.Description.Summary = Summary;
Content.Description.Date = Date;
Content.Description.Album = Album;
Content.Description.Album.Cover = Cover;
Content.Description.Album.Cover.Art = Art;
Content.Description.Album.Text = Text;
Content.Description.Album.Rating = Rating;

export default Content;

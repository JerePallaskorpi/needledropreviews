import styled, { keyframes } from 'styled-components';
import Content from './Content';

const FadeIn = () => keyframes`
    0% {
        opacity: 0;
        top: 0;
    }

    100% {
        opacity: 1;
        top: 12.5px;
    }
`;

const ReviewFullscreen = styled.div`
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.backgroundFloating};
`;

const ContentWrapper = styled.div`
    position: fixed;
    top: 25px;
    width: 750px;
    height: calc(100% - 50px);
    background: white;
    background: ${({ theme }) => theme.backgroundSecondary};
    box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.4);
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    overflow: auto;
    color: ${({ theme }) => theme.color};
    
    -webkit-animation: ${FadeIn()} 0.2s forwards;
    -moz-animation: ${FadeIn()} 0.2s forwards;
    -o-animation: ${FadeIn()} 0.2s forwards;
    animation: ${FadeIn()} 0.2s forwards;
    animation-delay: 0s;
    
    @media only screen and (max-height: 800px) {
        width: calc(100% - 25px);
        height: calc(100% - 25px);
        top: 12.5px;
    };
    
    @media only screen and (max-width: 800px) {
        width: calc(100% - 25px);
        height: calc(100% - 25px);
        top: 12.5px;
    };
`;

const BottomNav = styled.div`
    position: fixed;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999999999999999999999;
    background: ${({ theme }) => theme.background};
    border-radius: 0 0 5px 5px;
    box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
    font-size: 24px;
    width: 750px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    color: ${({ theme }) => theme.color};
    
    i {
        padding: 1rem;
        
        &:hover {
            cursor: pointer;
        }
    }
    
    @media only screen and (max-height: 800px) {
        width: calc(100% - 25px);
        bottom: 12.5px;
    };
    
    @media only screen and (max-width: 800px) {
        width: calc(100% - 25px);
        bottom: 12.5px;
    };
`;

const Video = styled.div`
    background: transparent;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    iframe {
        width: calc(100% - 50px);
        height: 56.25vw;
        position: relative;

        &:before {
           content: '';
           display: block;
           padding-top: 56.25%;
        }
        
        @media only screen and (min-width: 750px) {
            height: 421.875px;
            width: 100%;
            box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
            border-radius: 5px 5px 0 0;
        }
        
        @media only screen and (max-width: 800px) {
            width: 100%;
            height: calc((100vw - 25px) / 1.78);
        };
        
        @media only screen and (max-height: 500px) {
            width: 100%;
            height: 50%;
        }
    }
`;

ReviewFullscreen.ContentWrapper = ContentWrapper;
ReviewFullscreen.BottomNav = BottomNav;
ReviewFullscreen.Video = Video;
ReviewFullscreen.Content = Content;

export default ReviewFullscreen;

import styled from 'styled-components';
import { ratingDetails } from '../../../../utils/rating';

const Album = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    border-radius: 5px;
    background: ${({ theme }) => theme.background};
    background: ${({ rating, fullscreen }) => fullscreen
    && ratingDetails.some(r => r.score === rating)
    && ratingDetails.find(r => r.score === rating).color};
    
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

export default Album;

import styled from 'styled-components';
import { ratingDetails } from '../../../../utils/rating';

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
    border-radius: ${props => (props.fullscreen ? 0 : '0 5px 5px 0')};
    background: ${({ rating }) => ratingDetails.some(r => r.score === rating)
    && ratingDetails.find(r => r.score === rating).color};
    max-width: 1100px;
    
    @media only screen and (max-width: 1100px) {
        height: 75px;
        width: 75px;
        min-width: 75px;
    }
`;

export default Rating;

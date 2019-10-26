import styled, { css } from 'styled-components';
import * as styles from '../defaultStyles';
import { ratingDetails } from '../../../utils/rating';

export const ButtonScore = styled.button`
    text-transform: uppercase;
    font-weight: 700;
    border: 0;
    padding: 1rem;
    margin: 0.25rem;
    color: ${({ theme }) => theme.color};
    background: none;
    border-top: 5px solid ${({ rating }) => ratingDetails.some(r => r.score === rating)
        && ratingDetails.find(r => r.score === rating).color};
    border-radius: 2px;
    width: 100%;
    flex: 1;
    
    ${props => props.flat && css`
        color: ${styles.colorMain};
        background: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    `}
    
    ${({ active }) => active && css`
        -webkit-box-shadow: ${styles.shadowDefault};
        -moz-box-shadow: ${styles.shadowDefault};
        box-shadow: ${styles.shadowDefault};
        background: ${({ rating }) => ratingDetails.some(r => r.score === rating)
            && ratingDetails.find(r => r.score === rating).color};
        border-top: 5px solid transparent;
        color: ${styles.colorDark};
    `}
    
    ${props => props.disabled && css`
         opacity: 0.5;
    `}
    
    &:hover {
        cursor: pointer;
    }
    
    &:focus {
        outline: none;
    }  
`;

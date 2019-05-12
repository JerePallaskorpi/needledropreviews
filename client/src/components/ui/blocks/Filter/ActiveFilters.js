import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const ActiveFilters = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 1rem;
    
    div:last-of-type {
        display: flex;
        align-items: center;
    }
`;

const ResetFilters = styled.div`
    margin-left: 0.5rem;
    color: ${styles.colorScore2};
    font-size: 1.25rem;
    
    div, i {
        outline: none;
        
        &:focus {
            outline: none;
        }
    }
    
    &:hover {
        cursor: pointer;
    }
`;

const ToggleFilters = styled.div`
    margin-left: 2rem;
    font-size: 1.5rem;
    
    div, i {
        outline: none;
        
        &:focus {
            outline: none;
        }
    }
    
    &:hover {
        cursor: pointer;
    }
`;

const Pill = styled.div`
    padding: 0.5rem;
    background: ${styles.colorScore10};
    border-radius: 25px;
    box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
    margin: 0.5rem 0 0 1rem;
    font-size: 0.8em;
    max-width: calc(100% - 3rem);
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    
    &:hover {
        cursor: pointer;
    }
    
    .fas, .fa-times {
      margin-left: 0.5rem;
      color: ${styles.colorScore0};
    }
`;

ActiveFilters.ResetFilters = ResetFilters;
ActiveFilters.ToggleFilters = ToggleFilters;
ActiveFilters.Pill = Pill;

export default ActiveFilters;

import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const ActiveFilters = styled.div`
    display: flex;
    flex-wrap: wrap;
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

ActiveFilters.Pill = Pill;

export default ActiveFilters;

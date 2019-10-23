import styled from 'styled-components';
import * as styles from '../../defaultStyles';
import ActiveFilters from './ActiveFilters';
import Score from './Score';
import Search from './Search';
import Date from './Date';
import Handlers from './Handlers';

const Filter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: ${styles.shadowStrong};
    -moz-box-shadow: ${styles.shadowStrong};
    box-shadow: ${styles.shadowStrong};
    z-index: 1;
    height: auto;
    // max-height: ${props => (props.filterBarActive ? '250px' : 0)};
    transform: ${props => (props.filterBarActive ? 'translateY(0)' : 'translateY(100%)')};
    transform-origin: bottom;
    transition: 0.4s;
    
    @media only screen and (min-width: 600px) {
        //max-height: ${props => (props.filterBarActive ? '250px' : 0)};
    }
`;

const FilterOptions = styled.div`
    transition: 0.4s;
    height: auto;
    
`;

const Inputs = styled.div`
    display: flex;
    margin-top: -1rem;
`;

Filter.FilterOptions = FilterOptions;
Filter.FilterOptions.Inputs = Inputs;
Filter.Score = Score;
Filter.Search = Search;
Filter.Date = Date;
Filter.ActiveFilters = ActiveFilters;
Filter.Handlers = Handlers;

export default Filter;

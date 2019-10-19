import styled from 'styled-components';
import * as styles from '../../defaultStyles';
import ActiveFilters from './ActiveFilters';
import Score from './Score';
import Search from './Search';
import Date from './Date';

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
`;

const FilterOptions = styled.div`
    transition: 0.4s;
    height: auto;
    max-height: ${props => (props.filterBarActive ? '190px' : 0)};
    
    @media only screen and (min-width: 600px) {
        max-height: ${props => (props.filterBarActive ? '130px' : 0)};
    }
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

export default Filter;

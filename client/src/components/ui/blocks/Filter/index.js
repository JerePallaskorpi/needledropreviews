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
`;

const Inputs = styled.div`
    display: flex;
`;

Filter.Score = Score;
Filter.Inputs = Inputs;
Filter.Search = Search;
Filter.Date = Date;
Filter.ActiveFilters = ActiveFilters;

export default Filter;

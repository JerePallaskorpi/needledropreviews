import styled from 'styled-components';
import * as styles from '../../defaultStyles';
import ActiveFilters from './ActiveFilters';
import Score from './Score';
import Search from './Search';

const Filter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${styles.colorLight};
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: ${styles.shadowStrong};
    -moz-box-shadow: ${styles.shadowStrong};
    box-shadow: ${styles.shadowStrong};
`;

Filter.Score = Score;
Filter.Search = Search;
Filter.ActiveFilters = ActiveFilters;

export default Filter;

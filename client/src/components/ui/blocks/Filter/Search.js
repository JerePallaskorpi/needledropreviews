import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const Search = styled.div`
    margin: 1rem;
`;

const Input = styled.input`
    width: calc(100% - 1rem);
    padding: 0.5rem;
`;

Search.Input = Input;

export default Search;

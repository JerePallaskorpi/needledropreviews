import styled from 'styled-components';

const Search = styled.div`
    margin: 1rem;
    flex: 2;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    background: #fff;
    outline: none;
    border: 1px solid #ccc;
`;

Search.Input = Input;

export default Search;

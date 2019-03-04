import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const Search = styled.div`
    margin: 1rem;
    flex: 2;
    font-size: 14px;
`;

const Input = styled.input`
    width: 100%;
    padding: 0 16px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: hsl(0,0%,100%);
    border-radius: 4px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    min-height: 38px;
    outline: 0 !important;
    position: relative;
    -webkit-transition: all 100ms;
    transition: all 100ms;
    box-sizing: border-box;
    border: 1px solid hsl(0, 0%, 80%);
    
    &:focus {
        border: 2px solid ${styles.colorScore0};
        padding: 0 15px;
    }
`;

Search.Input = Input;

export default Search;

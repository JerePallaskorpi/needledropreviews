import styled from 'styled-components';

const Search = styled.div`
    margin: 1rem;
    flex: 3;
    font-size: 14px;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    padding: 0 0.5rem;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: ${({ theme }) => theme.backgroundSecondary};
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
    box-sizing: border-box;
    border: none;
    color: ${({ theme }) => theme.color};
    
    &:focus {
        border: none;
    }
    
    @media only screen and (max-width: 800px) {
        flex: 1;
    };
`;

const Icon = styled.div`
    background: ${({ theme }) => theme.backgroundSecondary};
    border-radius: 4px 0 0 4px;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    color: ${({ theme }) => theme.colorGray};
`;

const Close = styled.div`
    background: ${({ theme }) => theme.backgroundSecondary};
    border-radius: 0 4px 4px 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    
    &:hover {
        cursor: pointer;
    }
`;

Search.Input = Input;
Search.Icon = Icon;
Search.Close = Close;

export default Search;

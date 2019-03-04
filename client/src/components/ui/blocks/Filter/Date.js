import styled from 'styled-components';

const Date = styled.div`
    margin: 1rem;
    flex: 1;
    font-size: 14px;
`;

const Select = styled.select`
    width: 100%;
    padding: 0.5rem;
    background: #fff;
    outline: none;
    border: 1px solid #ccc;
`;

Date.Select = Select;

export default Date;

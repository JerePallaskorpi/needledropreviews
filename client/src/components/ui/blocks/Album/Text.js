import styled from 'styled-components';

const Text = styled.div`
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    letter-spacing: 1px;
    white-space: nowrap;
    overflow: hidden;
    
    span {
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    span:first-of-type {
        font-weight: bold;
    }
`;

export default Text;

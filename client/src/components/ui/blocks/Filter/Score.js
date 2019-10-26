import styled from 'styled-components';

const Score = styled.div`
    padding: 0.5rem; 
    display: flex; 
    justify-content: space-between;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.backgroundSecondary};
`;

export default Score;

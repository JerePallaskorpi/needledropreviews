import styled from 'styled-components';

const Handlers = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
`;

const Score = styled.div`
    padding: 1rem;

    i {
        padding-right: 0.5rem;
    }
`;

const Sort = styled.div`
    padding: 1rem;
    
    i {
        padding-left: 0.5rem;
    }
    
    &:hover {
        cursor: pointer;
    }
`;

const Menu = styled.div`
    background: ${({ theme }) => theme.background};
    text-align: right;
`;

const Item = styled.div`
    padding: 1rem;
    
    i {
        padding-left: 0.5rem;
    }
    
    &:hover {
        background: ${({ theme }) => theme.backgroundSecondary};
        cursor: pointer;
    }
`;

Handlers.Score = Score;
Handlers.Sort = Sort;
Handlers.Sort.Menu = Menu;
Handlers.Sort.Menu.Item = Item;

export default Handlers;

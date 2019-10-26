import styled from 'styled-components';

const Date = styled.div`
    margin: 1rem;
    flex: 2;
    font-size: 14px;
    
    .react-select__placeholder {
        color: ${({ theme }) => theme.colorGray};
    }
    
    .react-select__control {
        background: ${({ theme }) => theme.backgroundSecondary};
        border: none;
        color: ${({ theme }) => theme.color};
        
        .react-select__single-value {
            color: ${({ theme }) => theme.color};
        }
    }
    
    .react-select__menu {
        background: ${({ theme }) => theme.backgroundSecondary};
        color: ${({ theme }) => theme.color};
        
        .react-select__menu-list > .react-select__option {
            &:hover {
                background: ${({ theme }) => theme.background};
            }
        }
    }
`;

export default Date;

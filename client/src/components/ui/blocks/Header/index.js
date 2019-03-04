import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const Header = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    width: calc(100% - 2rem);
    height: 50px;
    top: 0;
    left: 0;
    padding: 0 1rem;
    -webkit-box-shadow: ${styles.shadowDefault};
    -moz-box-shadow: ${styles.shadowDefault};
    box-shadow: ${styles.shadowDefault};
    justify-content: space-between;
`;

const Logo = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const Sort = styled.div`
    font-size: 1.25rem;
    
    display: flex;
    
    div {
        margin-right: 1rem;
        
        :last-of-type {
            margin: 0;
        }
    }
`;

Header.Logo = Logo;
Header.Sort = Sort;

export default Header;

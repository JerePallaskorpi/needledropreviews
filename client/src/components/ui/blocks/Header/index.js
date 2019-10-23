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
    z-index: 2;
`;

const Logo = styled.div`
    height: 39px;
    
    &:hover {
        cursor: pointer;
    }
`;

const Sort = styled.div`
    font-size: 1.25rem;
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
    color: ${props => props.active && styles.colorScore0};
    color: ${props => props.fullscreen && styles.colorGray};
    
    &:focus {
        outline: none;
    }
    
    &:hover {
        cursor: ${props => (props.fullscreen ? styles.colorGray : 'pointer')};
    }
    
    div {
        margin-right: 1rem;
        display: flex;
        
        span {
            font-size: 1rem;
            padding-right: 0.5rem;
        }
        
        :last-of-type {
            margin: 0;
        }
    }
`;

Header.Logo = Logo;
Header.Sort = Sort;

export default Header;

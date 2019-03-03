import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const Header = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    padding-left: 0.5rem;
    -webkit-box-shadow: ${styles.shadowDefault};
    -moz-box-shadow: ${styles.shadowDefault};
    box-shadow: ${styles.shadowDefault};
    
    svg {
        &:hover {
            cursor: pointer;
        }
    }
`;

export default Header;

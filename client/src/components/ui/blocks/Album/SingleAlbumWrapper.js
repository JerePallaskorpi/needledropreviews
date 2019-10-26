import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const SingleAlbumWrapper = styled.div`
    min-width: 500px;
    padding: 0;
    margin: 0.35rem;
    display: flex;
    flex: 1;
    box-shadow: ${styles.shadowDefault};
    border-radius: 5px;
    background: ${({ theme }) => theme.background};
    opacity: ${props => (props.hidden ? 0 : 1)};
    z-index: ${props => (props.hidden ? -1 : 'initial')};
    flex-direction: column;
    
    @media only screen and (max-width: 1100px) {
        height: 75px;
        min-width: 350px;
    }
    
    @media only screen and (max-width: 764px) {
        min-width: calc(100% - 2rem);
    }
`;

export default SingleAlbumWrapper;

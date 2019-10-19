import styled, { css } from 'styled-components';
import * as styles from '../../defaultStyles';

const Cover = styled.div`
    height: 100px;
    width: 100px;
    min-width: 100px;
    padding: 0;
    border-radius: ${props => (props.fullscreen ? '0' : '5px 0 0 5px')};
    
    ${({ thumbnail, coverArt }) => css`
        background-color: ${styles.colorDark};
        background-image: url(${(coverArt ? 'https://66.media.tumblr.com/avatar_91da58554fa4_128.pnj' : thumbnail)});
        background-repeat: no-repeat;
        background-position: center; 
        background-size: cover;
    `};
    
    @media only screen and (max-width: 1100px) {
        height: 75px;
        width: 75px;
        min-width: 75px;
    };
`;

const Art = styled.div.attrs(props => ({
    style: {
        backgroundImage: `url(${props.coverArt})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: `${props.fullscreen ? '0' : '5px 0 0 5px'}`,
        height: '100%',
        width: '100%',
    },
}))`
`;

Cover.Art = Art;

export default Cover;

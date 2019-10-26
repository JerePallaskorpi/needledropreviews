import styled, { css } from 'styled-components';
import Album from './Album';
import Cover from './Cover';
import Rating from './Rating';
import Text from './Text';
import SingleAlbumWrapper from './SingleAlbumWrapper';

const AlbumWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: ${props => (props.filterBarActive ? '240px' : '0px')};
    background: ${({ theme }) => theme.background};
    transition: 0.4s;
    
    ${({ theme }) => theme && css`
        background: ${theme.backgroundSecondary};
        color: ${theme.color};
    `};
    
    @media only screen and (min-width: 600px) {
        margin-bottom: ${props => (props.filterBarActive ? '180px' : '0px')};
    }
`;

AlbumWrapper.Album = Album;
AlbumWrapper.Album.Cover = Cover;
AlbumWrapper.Album.Rating = Rating;
AlbumWrapper.Album.Text = Text;
AlbumWrapper.SingleAlbumWrapper = SingleAlbumWrapper;

export default AlbumWrapper;

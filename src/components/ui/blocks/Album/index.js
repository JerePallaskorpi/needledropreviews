import styled from 'styled-components';
import Album from './Album';
import Content from './Content';
import Cover from './Cover';
import Rating from './Rating';
import Text from './Text';
import SingleAlbumWrapper from './SingleAlbumWrapper';
import VideoWrapper from './VideoWrapper';

const AlbumWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

AlbumWrapper.Album = Album;
AlbumWrapper.Content = Content;
AlbumWrapper.Album.Cover = Cover;
AlbumWrapper.Album.Rating = Rating;
AlbumWrapper.Album.Text = Text;
AlbumWrapper.SingleAlbumWrapper = SingleAlbumWrapper;
AlbumWrapper.VideoWrapper = VideoWrapper;

export default AlbumWrapper;

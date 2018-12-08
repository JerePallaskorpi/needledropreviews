import styled, { css } from 'styled-components';
import * as styles from '../../defaultStyles';

const AlbumWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Album = styled.div`
    height: 75px;
    min-width: 350px;
    padding: 0;
    margin: 1rem;
    display: flex;
    box-shadow: ${styles.shadowDefault};
    flex: 1;
    border-radius: 5px;
    background: #FFFFFF;
    
    &:hover {
        cursor: pointer;
        box-shadow: ${styles.shadowStrong};
    }
`;

const Cover = styled.div`
    height: 75px;
    width: 75px;
    min-width: 75px;
    padding: 0;
    background-image: url('https://i.imgur.com/RaIad3c.png');
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;
    border-radius: 5px 0 0 5px;
`;

const Text = styled.div`
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    letter-spacing: 1px;
    white-space: nowrap;
    overflow: hidden;
    
    span {
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    span:first-of-type {
        font-weight: bold;
    }
`;

const Rating = styled.div`
    width: 75px;
    min-width: 75px;
    height: 75px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #282828;
    font-size: 24px;
    border-radius: 0 5px 5px 0;
    
    background: ${({ rating }) => (
        rating === 10 && '#FDF18B'
        || rating === 9 && '#fadd83'
        || rating === 8 && '#f6c97a'
        || rating === 7 && '#f3b472'
        || rating === 6 && '#efa069'
        || rating === 5 && '#ec8c61'
        || rating === 4 && '#e97858'
        || rating === 3 && '#e56450'
        || rating === 2 && '#e24f47'
        || rating === 1 && '#de3b3f'
        || '#db2736'
    )
};
    
    
`;

AlbumWrapper.Album = Album;
AlbumWrapper.Album.Cover = Cover;
AlbumWrapper.Album.Text = Text;
AlbumWrapper.Album.Rating = Rating;

export default AlbumWrapper;

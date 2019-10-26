// @flow
import React from 'react';
import AlbumWrapper from '../../../ui/blocks/Album';

type Props = {
    review: Object,
    handleAlbumClick: (evt: any, reviewId: string) => void,
};

const SingleReviewView = ({
    review,
    handleAlbumClick,
}: Props) => (
    <>
        <AlbumWrapper.SingleAlbumWrapper tabIndex={1}>
            <AlbumWrapper.Album
                id={review._id}
                onClick={e => handleAlbumClick(e, review._id)}
                rating={review.details.rating}
            >
                <AlbumWrapper.Album.Cover
                    thumbnail={review.thumbnail}
                    coverArt={review.details.albumCover}
                >
                    <AlbumWrapper.Album.Cover.Art coverArt={review.details.albumCover} />
                </AlbumWrapper.Album.Cover>
                <AlbumWrapper.Album.Text>
                    <span>
                        {review.details.album.toLowerCase().includes('self-titled')
                            ? review.details.artist
                            : review.details.album}
                    </span>
                    <span>{review.details.artist}</span>
                </AlbumWrapper.Album.Text>
                <AlbumWrapper.Album.Rating
                    rating={review.details.rating}
                >
                    <span>{review.details.rating !== null ? review.details.rating : '-'}</span>
                </AlbumWrapper.Album.Rating>
            </AlbumWrapper.Album>
        </AlbumWrapper.SingleAlbumWrapper>
    </>
);

export default SingleReviewView;

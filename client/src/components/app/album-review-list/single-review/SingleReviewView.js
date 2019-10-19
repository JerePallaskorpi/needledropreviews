// @flow
import React from 'react';
import AlbumWrapper from '../../../ui/blocks/Album';
import DescriptionView from './description/DescriptionView';

type Props = {
    review: Object,
    fullscreen: Object,
    leaveFullscreen: Object,
    handleAlbumClick: (evt: any, reviewId: string) => void,
    descDetails: Object,
};

const SingleReviewView = ({
    review,
    fullscreen,
    leaveFullscreen,
    handleAlbumClick,
    descDetails,
}: Props) => (
    <>
        <AlbumWrapper.SingleAlbumWrapper
            leaveFullscreen={leaveFullscreen.id === review._id && leaveFullscreen}
            fullscreen={fullscreen.id === review._id && fullscreen}
        >
            {fullscreen.id === review._id && (
                <>
                    <AlbumWrapper.VideoWrapper
                        leaveFullscreen={leaveFullscreen.id === review._id && leaveFullscreen}
                        fullscreen={fullscreen.id === review._id && fullscreen}
                    >
                        {fullscreen.id === review._id && (
                            <iframe
                                title={`${review.details.album} ${review.details.rating}`}
                                src={`https://www.youtube.com/embed/${review.videoId}?theme=light`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        )}
                    </AlbumWrapper.VideoWrapper>
                    <AlbumWrapper.Content
                        leaveFullscreen={leaveFullscreen.id === review._id
                        && leaveFullscreen}
                        fullscreen={fullscreen.id === review._id && fullscreen}
                    >
                        <DescriptionView
                            summary={descDetails.summary}
                            favTracks={descDetails.favTracks}
                            leastFavTracks={descDetails.leastFavTracks}
                            review={review}
                        />
                    </AlbumWrapper.Content>
                </>
            )}
            <AlbumWrapper.Album
                id={review._id}
                onClick={e => handleAlbumClick(e, review._id)}
                rating={review.details.rating}
                fullscreen={fullscreen.id === review._id}
                leaveFullscreen={leaveFullscreen.id === review._id
                && leaveFullscreen}
                originalPos={fullscreen.originalPos}
            >
                <AlbumWrapper.Album.Cover
                    thumbnail={review.thumbnail}
                    coverArt={review.details.albumCover}
                    fullscreen={fullscreen.id === review._id}
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
                    fullscreen={fullscreen.id === review._id}
                >
                    <span>{review.details.rating}</span>
                </AlbumWrapper.Album.Rating>
            </AlbumWrapper.Album>

        </AlbumWrapper.SingleAlbumWrapper>
        {(leaveFullscreen.id === review._id || fullscreen.id === review._id)
        && <AlbumWrapper.SingleAlbumWrapper id={`${review._id}_original`} hidden />
        }
    </>
);

export default SingleReviewView;

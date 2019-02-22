// @flow
import React, { Fragment } from 'react';
import { ratingDetails } from '../../../utils/rating';
import AlbumWrapper from '../../ui/blocks/Album';
import { Button } from '../../ui/elements/Button';

type Props = {
    handleScoreClick: (score: number) => void,
    handleTextChange: (evt: any) => void,
    filteredReviews: Object[],
    fullscreen: Object,
    leaveFullscreen: Object,
    handleAlbumClick: (evt: any, reviewId: string) => void,
};

const AlbumReviewListView = ({
    handleScoreClick,
    handleTextChange,
    filteredReviews,
    fullscreen,
    leaveFullscreen,
    handleAlbumClick,
}: Props) => (
    <Fragment>
        <div style={{
            padding: '0.5rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
        }}
        >
            {ratingDetails.map(rating => (
                <Button
                    style={{ background: rating.color, flex: 1 }}
                    onClick={() => handleScoreClick(rating.score)}
                >
                    {rating.score}
                </Button>
            )).reverse()}
        </div>
        <div style={{ margin: '1.5rem' }}>
            <input
                style={{
                    padding: '0.5rem', width: 'calc(100% - 1.5rem)',
                }}
                type="text"
                onChange={evt => handleTextChange(evt)}
            />
        </div>
        <AlbumWrapper>
            {filteredReviews && filteredReviews.map(review => (
                <Fragment>
                    <AlbumWrapper.SingleAlbumWrapper
                        leaveFullscreen={leaveFullscreen.id === review._id
                        && leaveFullscreen}
                        fullscreen={fullscreen.id === review._id && fullscreen}
                    >
                        <AlbumWrapper.VideoWrapper>
                            {fullscreen.id === review._id && (
                                <iframe
                                    src={`https://www.youtube.com/embed/${review.videoId}`}
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
                            <div>
                                <p>{review.description.split('\n').find(line => !line.includes('http') && line.length > 10)}</p>
                                <p>{review.description.split('\n').find(line => line.substring(0, 3).toLowerCase() === 'fav')}</p>
                                <p>{review.description.split('\n').find(line => line.substring(0, 5).toLowerCase() === 'least')}</p>
                            </div>
                        </AlbumWrapper.Content>
                        <AlbumWrapper.Album
                            onClick={e => handleAlbumClick(e, review._id)}
                            rating={review.details.rating}
                            fullscreen={fullscreen.id === review._id}
                            leaveFullscreen={leaveFullscreen.id === review._id
                            && leaveFullscreen}
                        >
                            <AlbumWrapper.Album.Cover
                                thumbnail={review.thumbnail}
                                coverArt={review.details.albumCover}
                            >
                                <div />
                            </AlbumWrapper.Album.Cover>
                            <AlbumWrapper.Album.Text>
                                <span>
                                    {review.details.album.toLowerCase().includes('self-titled')
                                        ? review.details.artist
                                        : review.details.album}
                                </span>
                                <span>{review.details.artist}</span>
                            </AlbumWrapper.Album.Text>
                            <AlbumWrapper.Album.Rating rating={review.details.rating}>
                                <span>{review.details.rating}</span>
                            </AlbumWrapper.Album.Rating>
                        </AlbumWrapper.Album>

                    </AlbumWrapper.SingleAlbumWrapper>
                    {(leaveFullscreen.id === review._id || fullscreen.id === review._id)
                    && (
                        <AlbumWrapper.SingleAlbumWrapper hidden />
                    )
                    }
                </Fragment>
            ))}
        </AlbumWrapper>
    </Fragment>
);

export default AlbumReviewListView;

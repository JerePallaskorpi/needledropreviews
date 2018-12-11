// @flow
import React, { Component, Fragment } from 'react';
import { getAlbums } from '../../../api/album';
import { textFilter } from '../../../utils/reviewFilter';
import { ratingDetails } from '../../../utils/rating';
import AlbumWrapper from '../../ui/blocks/Album';
import { Button } from '../../ui/elements/Button';

type State = {
    user: string,
    channel: ?Object,
};

const initialState = {
    user: '',
    channel: null,
    albumReviews: [],
    filteredReviews: [],
    fullscreen: {
        id: '',
        x: 0,
        y: 0,
    },
    leaveFullscreen: {
        id: '',
        x: 0,
        y: 0,
    },
};

class Home extends Component<null, State> {
    constructor(props) {
        super(props);
        this.state = { ...initialState };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAlbumClick = this.handleAlbumClick.bind(this);
    }

    async componentDidMount() {
        const albumReviews = await getAlbums();
        console.log(albumReviews.filter(a => a.details.albumCover).length);
        console.log(albumReviews.length);
        this.setState({
            albumReviews,
            filteredReviews: albumReviews.slice(0, 30),
        });
    }

    async handleLoginClick(rating: number) {
        const { albumReviews } = this.state;

        this.setState({
            filteredReviews: albumReviews
                .filter(a => a.details.rating === rating).slice(0, 30),
        });
    }


    handleTextChange(evt: string) {
        const { albumReviews } = this.state;

        const text = evt.target.value;

        if (text.trim().length >= 2) {
            this.setState({
                filteredReviews: textFilter(albumReviews, text),
            });
        }
    }

    handleAlbumClick(e, id: string) {
        e.persist();
        const { fullscreen } = this.state;



        if (fullscreen.id === id) {
            this.setState({
                leaveFullscreen: { id, x: fullscreen.x, y: fullscreen.y },
                fullscreen: initialState.fullscreen,
            });

            setTimeout(() => {
                this.setState({
                    leaveFullscreen: initialState.leaveFullscreen,
                    fullscreen: initialState.fullscreen,
                });
            }, 500);
        } else {
            this.setState({
                fullscreen: { id, x: e.clientX, y: e.clientY },
            });
        }
    }

    render() {
        const { filteredReviews, leaveFullscreen, fullscreen } = this.state;

        console.log(this.state);

        return (
            <Fragment>
                <div style={{
                    padding: '0.5rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
                }}
                >
                    {ratingDetails.map(rating => (
                        <Button
                            style={{ background: rating.color, flex: 1 }}
                            onClick={() => this.handleLoginClick(rating.score)}
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
                        onChange={evt => this.handleTextChange(evt)}
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
                                    onClick={e => this.handleAlbumClick(e, review._id)}
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
    }
}

export default Home;

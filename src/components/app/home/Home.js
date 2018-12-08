// @flow
import React, { Component, Fragment } from 'react';
import { getAlbums } from '../../../api/album';
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
};

class Home extends Component<null, State> {
    constructor(props) {
        super(props);
        this.state = { ...initialState };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    async componentDidMount() {
        const albumReviews = await getAlbums();
        this.setState({ albumReviews, filteredReviews: albumReviews });
    }

    async handleLoginClick(rating: number) {
        const { albumReviews } = this.state;

        this.setState({
            filteredReviews: albumReviews
                .filter(a => a.details.rating === rating),
        });
    }

    handleTextChange(evt: string) {
        const { albumReviews } = this.state;

        console.log(evt.target.value);
        console.log(albumReviews);

        this.setState({
            filteredReviews: albumReviews
                .filter(a => a.title.toLowerCase().includes(evt.target.value.toLowerCase())),
        });
    }

    render() {
        const { filteredReviews } = this.state;

        return (
            <Fragment>
                <div style={{
                    margin: '0 1rem', display: 'flex', justifyContent: 'space-between',
                }}
                >
                    <input
                        style={{
                            padding: '0.5rem', width: '100%',
                        }}
                        type="text"
                        onChange={evt => this.handleTextChange(evt)}
                    />
                </div>

                <div style={{
                    padding: '0.5rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between',
                }}
                >
                    <Button onClick={() => this.handleLoginClick(0)}>0</Button>
                    <Button onClick={() => this.handleLoginClick(1)}>1</Button>
                    <Button onClick={() => this.handleLoginClick(2)}>2</Button>
                    <Button onClick={() => this.handleLoginClick(3)}>3</Button>
                    <Button onClick={() => this.handleLoginClick(4)}>4</Button>
                    <Button onClick={() => this.handleLoginClick(5)}>5</Button>
                    <Button onClick={() => this.handleLoginClick(6)}>6</Button>
                    <Button onClick={() => this.handleLoginClick(7)}>7</Button>
                    <Button onClick={() => this.handleLoginClick(8)}>8</Button>
                    <Button onClick={() => this.handleLoginClick(9)}>9</Button>
                    <Button onClick={() => this.handleLoginClick(10)}>10</Button>
                </div>
                <AlbumWrapper>
                    {filteredReviews && filteredReviews.map(review => (
                        <AlbumWrapper.Album>
                            <AlbumWrapper.Album.Cover />
                            <AlbumWrapper.Album.Text>
                                <span>{review.details.album}</span>
                                <span>{review.details.artist}</span>
                            </AlbumWrapper.Album.Text>
                            <AlbumWrapper.Album.Rating rating={review.details.rating}>
                                <span>{review.details.rating}</span>
                            </AlbumWrapper.Album.Rating>
                        </AlbumWrapper.Album>
                    ))}
                </AlbumWrapper>
            </Fragment>
        );
    }
}

export default Home;

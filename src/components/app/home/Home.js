// @flow
import React, { Component, Fragment } from 'react';
import { initClient, getVideoPlaylist } from '../../../api/auth';
import { Button } from '../../ui/elements/Button';

type State = {
    user: string,
    channel: ?Object,
};

const initialState = {
    user: '',
    channel: null,
};

class Home extends Component<null, State> {
    constructor(props) {
        super(props);
        this.state = { ...initialState };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    async componentDidMount() {
        const channel = await initClient();
        this.setState({ channel });
    }

    async handleLoginClick() {
        this.setState({ user: 'Jere' });
        const data = await getVideoPlaylist('UUt7fwAhXDy3oNFTAzF2o8Pw');
        console.log(data);
        this.setState({
            albumReviews: data.albumReviews,
        });
    }

    handleLogoutClick() {
        this.setState({ user: '' });
    }

    render() {
        const { user, channel, albumReviews } = this.state;

        return (
            <Fragment>
                {channel && <h3>{channel.result.items[0].snippet.title}</h3>}
                {channel && <p>{channel.result.items[0].snippet.description}</p>}
                <Button style={{ width: '100%' }} onClick={this.handleLoginClick}>Latest 100</Button>
                {albumReviews && albumReviews.map(asd => (
                    <div style={{
                        padding: '0.5rem', marginTop: '0.5rem', background: '#f1f1f1', display: 'flex', justifyContent: 'space-between',
                    }}
                    >
                        <div>
                            {`${asd.snippet.title.replace('ALBUM REVIEW', '').trim()}`}
                        </div>
                        <div>
                            {`${asd.snippet.description
                                .split('/10')[0]
                                .substring(asd.snippet.description.split('/10')[0].length - 2)
                                .trim()}/10`}
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
}

export default Home;

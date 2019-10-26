// @flow
import React from 'react';
import moment from 'moment';
import Content from '../../../../ui/blocks/ReviewFullscreen/Content';

type Props = {
    summary: string,
    favTracks: string[],
    leastFavTracks: string[],
    review: Object,
};

const DescriptionView = ({
    summary, favTracks, leastFavTracks, review,
}: Props) => (
    <Content.Description>
        <Content.Description.Album>
            <Content.Description.Album.Cover
                thumbnail={review.thumbnail}
                coverArt={review.details.albumCover}
            >
                <Content.Description.Album.Cover.Art coverArt={review.details.albumCover} />
            </Content.Description.Album.Cover>
            <Content.Description.Album.Text>
                <span>
                    {review.details.album.toLowerCase().includes('self-titled')
                        ? review.details.artist
                        : review.details.album}
                </span>
                <span>{review.details.artist}</span>
            </Content.Description.Album.Text>
            <Content.Description.Album.Rating rating={review.details.rating}>
                <span>{review.details.rating !== null ? review.details.rating : '-'}</span>
            </Content.Description.Album.Rating>
        </Content.Description.Album>
        <Content.Description.Date>
            <span>{moment(review.date).format('MMMM Do, YYYY')}</span>
        </Content.Description.Date>
        <Content.Description.Summary>
            <p>Summary</p>
            <p>{summary}</p>
        </Content.Description.Summary>
        <Content.Description.Tracks>
            {favTracks.length > 0 && (
                favTracks.map((track, index) => (
                    <Content.Description.Tracks.Track
                        fav
                        nthTrack={index}
                        key={track}
                    >
                        {track}
                    </Content.Description.Tracks.Track>
                ))
            )}
            {leastFavTracks.length > 0 && (
                leastFavTracks.map((track, index) => (
                    <Content.Description.Tracks.Track
                        nthTrack={favTracks.length + index}
                        key={track}
                    >
                        {track}
                    </Content.Description.Tracks.Track>
                ))
            )}
        </Content.Description.Tracks>
    </Content.Description>
);

export default DescriptionView;

// @flow
import React from 'react';
import moment from 'moment';
import Content from '../../../../ui/blocks/Album/Content';

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
        <Content.Description.Date>
            <span>{moment(review.date).format('MMMM Do, YYYY')}</span>
        </Content.Description.Date>
        <Content.Description.Summary>
            <p>Summary</p>
            <p>{summary}</p>
        </Content.Description.Summary>
        <Content.Description.Tracks>
            <Content.Description.Favs>
                <p>Favs</p>
                {favTracks.length > 0
                    ? favTracks.map(favTrack => (
                        <p key={favTrack}>{favTrack}</p>
                    ))
                    : <p>-</p>}
            </Content.Description.Favs>
            <Content.Description.LeastFavs>
                <p>Least Favs</p>
                {leastFavTracks.length > 0
                    ? leastFavTracks.map(leastFavTrack => (
                        <p key={leastFavTrack}>{leastFavTrack}</p>
                    ))
                    : <p>-</p>}
            </Content.Description.LeastFavs>
        </Content.Description.Tracks>
    </Content.Description>
);

export default DescriptionView;

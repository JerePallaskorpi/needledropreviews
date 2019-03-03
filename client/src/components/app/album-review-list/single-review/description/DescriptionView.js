// @flow
import React from 'react';
import Content from '../../../../ui/blocks/Album/Content';

type Props = {
    summary: string,
    favTracks: string[],
    leastFavTracks: string[],
};

const DescriptionView = ({ summary, favTracks, leastFavTracks }: Props) => (
    <Content.Description>
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

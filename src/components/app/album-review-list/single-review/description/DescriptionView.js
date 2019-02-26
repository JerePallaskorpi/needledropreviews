// @flow
import React from 'react';
import Description from '../../../../ui/blocks/Album/Content';

type Props = {
    summary: string,
    favTracks: string[],
    leastFavTracks: string[],
};

const DescriptionView = ({ summary, favTracks, leastFavTracks }: Props) => (
    <Description>
        <p>{summary}</p>
        {favTracks.length > 0 && (
            <>
                <Description.Favs>Fav</Description.Favs>
            </>
        )}
    </Description>
);

export default DescriptionView;

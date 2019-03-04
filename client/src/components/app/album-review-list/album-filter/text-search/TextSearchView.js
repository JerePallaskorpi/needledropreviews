// @flow
import React from 'react';
import Filter from '../../../../ui/blocks/Filter';

type Props = {
    handleTextChange: (evt: any) => void,
    search: string,
};

const TextSearchView = ({ handleTextChange, search }: Props) => (
    <Filter.Search>
        <Filter.Search.Input
            placeholder="Search for an artist or album"
            type="text"
            maxLength={30}
            value={search}
            onChange={evt => handleTextChange(evt)}
        />
    </Filter.Search>
);

export default TextSearchView;

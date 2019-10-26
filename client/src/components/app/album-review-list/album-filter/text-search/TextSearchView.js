// @flow
import React from 'react';
import Filter from '../../../../ui/blocks/Filter';

type Props = {
    handleTextChange: (evt: any) => void,
    handleTextReset: () => void,
    search: string,
};

const TextSearchView = ({ handleTextChange, handleTextReset, search }: Props) => (
    <Filter.Search>
        <Filter.Search.Icon>
            <i className="fas fa-search" />
        </Filter.Search.Icon>
        <Filter.Search.Input
            placeholder="Search"
            type="text"
            maxLength={30}
            value={search}
            onChange={evt => handleTextChange(evt)}
        />
        {search.length > 0 && (
            <Filter.Search.Close onClick={handleTextReset}>
                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg">
                    <path
                        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
                    />
                </svg>
            </Filter.Search.Close>
        )}
    </Filter.Search>
);

export default TextSearchView;

// @flow
import React from 'react';

type Props = {
    handleTextChange: (evt: any) => void,
};

const TextSearchView = ({ handleTextChange }: Props) => (
    <div style={{ margin: '1.5rem' }}>
        <input
            style={{
                padding: '0.5rem', width: 'calc(100% - 1.5rem)',
            }}
            type="text"
            onChange={evt => handleTextChange(evt)}
        />
    </div>
);

export default TextSearchView;

// @flow
import React from 'react';

type Props = {
    filterBarActive: boolean,
    handleFilterToggleClick: () => void,
};

const ToggleFilterView = ({ filterBarActive, handleFilterToggleClick }: Props) => (
    <>
        <div role="button" tabIndex={0} onClick={handleFilterToggleClick} onKeyDown={handleFilterToggleClick}>
            {filterBarActive
                ? <i className="fas fa-chevron-down" />
                : <i className="fas fa-chevron-up" />}
        </div>
    </>
);

export default ToggleFilterView;

// @flow
import React from 'react';

type Props = {
    activeFilters: string,
    resetFilters: string,
};

const ResetFilterView = ({ activeFilters, resetFilters }: Props) => (
    <>
        { (activeFilters.score.length > 0
            || activeFilters.search.length > 0
            || activeFilters.date)
        && (
            <div role="button" tabIndex={0} onKeyDown={resetFilters} onClick={resetFilters}>
                <i className="fas fa-redo" />
            </div>
        )}
    </>
);

export default ResetFilterView;

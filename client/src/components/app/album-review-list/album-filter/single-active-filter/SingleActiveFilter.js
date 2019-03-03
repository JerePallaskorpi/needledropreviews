// @flow
import React from 'react';
import Filter from '../../../../ui/blocks/Filter';

type Props = {
    title: string,
    filters: string,
    handleResetFilter: string,
};

const SingleActiveFilter = ({ title, filters, handleResetFilter }: Props) => (
    <>
        { filters.length > 0 && (
            <Filter.ActiveFilters.Pill onClick={handleResetFilter}>
                <span>
                    {title}
                </span>
                <span>
                    {filters}
                </span>
                <i className="fas fa-times" />
            </Filter.ActiveFilters.Pill>
        )}
    </>
);

export default SingleActiveFilter;

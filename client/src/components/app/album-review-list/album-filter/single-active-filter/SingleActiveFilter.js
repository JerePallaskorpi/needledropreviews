// @flow
import React from 'react';
import Filter from '../../../../ui/blocks/Filter';

type Props = {
    title: string,
    filters: string,
};

const SingleActiveFilter = ({ title, filters }: Props) => (
    <>
        { filters.length > 0 && (
            <Filter.ActiveFilters.Pill>
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

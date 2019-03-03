// @flow
import React from 'react';
import Filter from '../../../../ui/blocks/Filter';

type Props = {
    handleDateChange: (evt: Object) => void,
    date: string,
    reviewYears: string[],
};

const DateSelectView = ({ handleDateChange, date, reviewYears }: Props) => (
    <Filter.Date>
        <Filter.Date.Select
            onChange={evt => handleDateChange(evt)}
            value={date}
        >
            <option />
            { reviewYears.map(year => <option key={year} value={year}>{year}</option>)}
        </Filter.Date.Select>
    </Filter.Date>
);

export default DateSelectView;

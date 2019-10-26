// @flow
import React from 'react';
import Select from 'react-select';
import Filter from '../../../../ui/blocks/Filter';

type Props = {
    handleDateChange: (evt: Object) => void,
    date: string,
    reviewYears: string[],
};

const DateSelectView = ({ handleDateChange, date, reviewYears }: Props) => (
    <Filter.Date>
        <Select
            onChange={handleDateChange}
            value={date}
            options={reviewYears.map(year => ({ value: year, label: year }))}
            menuPlacement="top"
            isSearchable={false}
            isClearable
            placeholder="Year..."
            closeMenuOnSelect
            theme={theme => ({
                ...theme,
                colors: {},
            })}
            className="react-select-container"
            classNamePrefix="react-select"
        />
    </Filter.Date>
);

export default DateSelectView;

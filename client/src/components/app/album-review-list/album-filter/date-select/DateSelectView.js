// @flow
import React from 'react';
import Select from 'react-select';
import Filter from '../../../../ui/blocks/Filter';
import { colorScore10, colorScore0 } from '../../../../ui/defaultStyles';

type Props = {
    handleDateChange: (evt: Object) => void,
    date: string,
    reviewYears: string[],
};

const defaultValue = { value: 'haloo', label: 'haloo' };

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
                colors: {
                    ...theme.colors,
                    primary25: colorScore10,
                    primary: colorScore0,
                },
            })}
        />
    </Filter.Date>
);

export default DateSelectView;

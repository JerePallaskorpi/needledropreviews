// @flow
import React from 'react';
import Popup from 'reactjs-popup';
import Filter from '../../../../ui/blocks/Filter';

type Props = {
    sortBy: string,
    setSortBy: (sortBy: string) => void,
};

const SortMenuView = ({ sortBy, setSortBy }: Props) => (
    <Popup
        trigger={(
            <Filter.Handlers.Sort>
                {sortBy === 'newest' && (
                    <>
                        <span>Most Recent</span>
                        <i className="fas fa-sort-amount-down" />
                    </>
                )}
                {sortBy === 'oldest' && (
                    <>
                        <span>Oldest</span>
                        <i className="fas fa-sort-amount-up" />
                    </>
                )}
                {sortBy === 'random' && (
                    <>
                        <span>Random</span>
                        <i className="fas fa-random" />
                    </>
                )}
            </Filter.Handlers.Sort>
        )}
        position="top right"
        on="click"
        open={false}
        closeOnDocumentClick
        closeOnItemClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
    >
        {close => (
            <Filter.Handlers.Sort.Menu>
                {sortBy !== 'newest' && (
                    <Filter.Handlers.Sort.Menu.Item
                        onClick={() => {
                            close();
                            setSortBy('newest');
                        }}
                    >
                        <span>Most Recent</span>
                        <i className="fas fa-sort-amount-down" />
                    </Filter.Handlers.Sort.Menu.Item>
                )}
                {sortBy !== 'oldest' && (
                    <Filter.Handlers.Sort.Menu.Item
                        onClick={() => {
                            close();
                            setSortBy('oldest');
                        }}
                    >
                        <span>Oldest</span>
                        <i className="fas fa-sort-amount-up" />
                    </Filter.Handlers.Sort.Menu.Item>
                )}
                {sortBy !== 'random' && (
                    <Filter.Handlers.Sort.Menu.Item
                        onClick={() => {
                            close();
                            setSortBy('random');
                        }}
                    >
                        <span>Random</span>
                        <i className="fas fa-random" />
                    </Filter.Handlers.Sort.Menu.Item>
                )}
            </Filter.Handlers.Sort.Menu>
        )}
    </Popup>
);

export default SortMenuView;

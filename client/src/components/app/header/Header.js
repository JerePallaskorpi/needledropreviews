// @flow
import React from 'react';
import Switch from 'react-switch';
import { smallLogo } from '../../../utils/svg/logo';
import { themeDark } from '../../../utils/themes';
import StyledHeader from '../../ui/blocks/StyledHeader';

type Props = {
    handleSwitchTheme: Object,
    theme: (evt: any, reviewId: string) => void,
};

const Header = ({
    handleSwitchTheme, theme,
}: Props) => (
    <StyledHeader>
        <StyledHeader.Logo>
            {smallLogo(() => {})}
        </StyledHeader.Logo>
        <Switch
            onChange={handleSwitchTheme}
            checked={theme === themeDark}
            uncheckedIcon={
                <i className="fas fa-cloud-sun" style={{ position: 'absolute', top: '9px', left: '9px' }} />
            }
            checkedIcon={
                <i className="fas fa-cloud-moon" style={{ position: 'absolute', top: '9px', left: '9px' }} />
            }
            onColor="#191919"
            offColor="#eeeeee"
            onHandleColor="#eeeeee"
            offHandleColor="#191919"
            handleDiameter={30}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={36}
            width={68}
            className="react-switch"
            id="material-switch"
        />
    </StyledHeader>
);

export default Header;

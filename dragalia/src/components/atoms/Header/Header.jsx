import React from 'react';

import { StyledHeader } from '../../../styles/StyledHeader';
import logo from '../../../img/dragon-logo.png';

const Header = () => (
    <StyledHeader>
        <img className="logo" src={logo} alt="Dragalia Logo" />
        <h1>Welcome to Dragalia!</h1>
        <h3>Here you will find information about the most famous dragons in the world.</h3>
    </StyledHeader>
);

export default Header;
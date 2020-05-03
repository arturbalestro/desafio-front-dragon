import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader } from '../styles/StyledHeader';
import logo from '../img/dragon-logo.png';

const Header = () => (
    <StyledHeader>
        <Link to="/">
            <img className="logo" src={logo} alt="Dragalia Logo" />
        </Link>
        <h1>Welcome to Dragalia!</h1>
        <h3>Here you will find information about the most famous dragons in the world.</h3>
    </StyledHeader>
);

export default Header;
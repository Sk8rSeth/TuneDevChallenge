import React from 'react';
import cog from "../images/cog.png"
import Link from 'gatsby-link';

const Menu = ({toggleTheme}) => (
    <div className="cogMenu" onClick={toggleTheme}><img src={cog} alt="settings menu" /></div>
);
export default Menu;
import React from 'react';
import logo from "../../LogoLea.png";
import Style from "./Header.module.css"
import Links from '../Pures/links';

const Header = () => {

    const links = ["HOME", "ABOUT", "PROJECTS", "CONTACTS"];


    return (
        <div  className={Style.containerHeader}>
            <img src= {logo} className = {Style.logo}  alt = "logo" />

            {/**Links */}
            <div className={Style.containerLinksHeader}>

                {
                    links.map((elm, i) => <Links key={i} name={elm.toLowerCase()} />)
                }

            </div>

        </div>
    );
}

export default Header;

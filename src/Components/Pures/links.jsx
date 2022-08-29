import React from 'react';
import { Link } from 'react-router-dom';
import "../../CSS/styleLinks.css"

const Links = ({name, link}) => {
    return (
        <>
        <Link to = {`/${name}`}>
            {name}
        </Link>
        </>
    );
}

export default Links;

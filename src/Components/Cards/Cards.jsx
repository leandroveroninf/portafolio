import React from 'react';
import Style from "./Cards.module.css";
import { Link } from "react-router-dom";

const Cards = ({id, img, name, description, tecnologi}) => {
    return (
        <div className={Style.contCard} >
            <div className={Style.cardImg}>
            <Link to={`/projects/detail/${id}`} >
                <img src={ img } alt = {`project - ${name}`} />

            </Link>
            </div>
            <div className={Style.cardName}>
                <h2>
                    { name }
                </h2>
            </div>

            {/*<div className={Style.cardTeng}>
                {
                    tecnologi.map((elm, i) => {
                        return(<span key={i} > {elm} </span>)
                    })
                }
            </div>*/}
        </div>
    );
}

export default Cards;

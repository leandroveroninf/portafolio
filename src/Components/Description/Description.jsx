import React from 'react';
import style from "./Description.module.css"

const Description = ({description, tecnologias}) => {
    return (
        <div className={style.container} >
        <h2>
            Description
        </h2>
            <p className={style.description}>{description}</p>
            <h2>
            Technologies
            </h2>
            <div className={style.tecnologia} >
                {
                    tecnologias.map((elm, i)=>{
                        return (<span key={i} >{elm.name}</span>)
                    })
                }
            </div>
        </div>
    );
}

export default Description;

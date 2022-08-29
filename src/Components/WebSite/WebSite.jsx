import React from 'react';
import { useSelector } from 'react-redux';
import Cards from '../Cards/Cards';
import Style from "./WebSite.module.css"


const WebSite = () => {

    const { list } = useSelector(state => state.projects);

   
    return (
        <div className={Style.container}>
            {
                list.map((elm, i)=>{
                    return (<Cards id={elm.id} img={elm.imgMain.img} name = {elm.name} description = {elm.description} tecnologi = {elm.tecnologis} />)
                })
            }
        </div>
    );
}

export default WebSite;

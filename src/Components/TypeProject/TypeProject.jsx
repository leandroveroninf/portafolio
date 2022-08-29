import React from 'react';
import Style from "./TypeProject.module.css";


const TypeProject = () => {
    return (
        <div  className={Style.contTypesProyects} >



            <div className={Style.cont}>
                <div className={Style.contTypeImg} >
                    <a href='/'>
                        <img className={Style.img} src='https://www.jing.fm/clipimg/full/198-1987176_fixed-wireless-monthly-internet-icono-pagina-web-png.png' alt='web' />
                    </a>   
                </div>
                <div>
                    <h2>Web Site</h2>
                </div>

            </div>

            <div className={Style.cont}>
                <div className={Style.contTypeImg} >
                    <a href='/'>
                        <img className={Style.img} src='https://freepngimg.com/download/software/26785-9-software-transparent.png' alt='software' />
                    </a>   
                </div>
                <div>
                    <h2>Software</h2>
                </div>

            </div>
            



        </div>
    );
}

export default TypeProject;

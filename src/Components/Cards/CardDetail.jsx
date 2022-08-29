import React, { useState } from 'react';
import style from "./CadrDetail.module.css";

const CardDetail = ({ imgs, imgMain }) => {

    

    const [img_main, setImgMain] = useState(imgMain);
    const [imgsState, setImgs] = useState([imgMain,...imgs]);
    const [imgsMos, setImgsMos] = useState(imgsState.slice(0, 2));

    const handerOnClick = (e)=>{
        console.log(e.nativeEvent.srcElement.currentSrc);
        setImgMain(e.nativeEvent.srcElement.currentSrc);
    }

    const handerSigImgs = (e) => {
        const indElm = imgsState.indexOf(imgsMos.pop());
        const arr = [];
        if((indElm + 1) === imgsState.length){
            arr.push(...imgsState.slice(0, 2));
        }else{   
            arr.push(...imgsState.slice(indElm, (indElm + 2)));
        }
        setImgsMos(arr);
        
        
    }

    const handerAntImgs = (e) => {
        const indElm = imgsState.indexOf(imgsMos.shift());
        const arr = [];
        if(indElm === 0){
            arr.push(...imgsState.slice((imgsState.length-2), imgsState.length));
           
        }else{   
            arr.push(...imgsState.slice((indElm-1), (indElm + 1)));
        }
        setImgsMos(arr);
        
        
    }

    return (
            <div className={style.container} >
                <div className={style.imgMain} >
                    <img src={img_main ? img_main.img : ""} alt = "Main" />
                </div>
                <div>
                    <div className={style.contImgs} >
                        <div className={style.btnAnt} >
                            <span onClick={handerAntImgs} > {"<"} </span>
                    </div>
                {
                    imgsMos ? imgsMos.map((elm, i) =>(
                        <div key={i} className = {style.imgs} >
                            <img key={i} onClick={handerOnClick} src={elm.img ? elm.img : ""} alt = "extras" />
                        </div>
                        )) : <></>
                }
                <div className={style.btnSig} >
                    <span onClick={handerSigImgs} > {">"} </span>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;

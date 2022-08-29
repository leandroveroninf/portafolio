import React, { useEffect, useState } from 'react';
import style from "./ImgMain.module.css";
import { useDispatch, useSelector } from "react-redux";
import { saveImgMain } from '../../../Redux/store/slice/ImgMains/action';

const ImgMain = ({SetImgMain}) => {

    const dispach = useDispatch();

    const { list } = useSelector(state => state.imgMain);
    const [imgsMos, setImgsMos] = useState(list.slice(0, 2));
    

    const [urlImg, setUtl] = useState({
        img: ""
    });

    useEffect(() => {
        setImgsMos(list.slice(0, 2))
    }, [list]);

    const handerSigImgs = (e) => {
        const indElm = list.indexOf(imgsMos.pop());
        const arr = [];
        if((indElm + 1) === list.length){
            arr.push(...list.slice(0, 2));
        }else{   
            arr.push(...list.slice(indElm, (indElm + 2)));
        }
        setImgsMos(arr);
        
        
    }

    const handerAntImgs = (e) => {
        const indElm = list.indexOf(imgsMos.shift());
        const arr = [];
        if(indElm === 0){
            arr.push(...list.slice((list.length-2), list.length));
           
        }else{   
            arr.push(...list.slice((indElm-1), (indElm + 1)));
        }
        setImgsMos(arr);
        
        
    }

    const handleImgMainClick = (e)=>{
        SetImgMain(e.target.id);
    }


    const handleTechChange = (e) => setUtl({
        ...urlImg,
        [e.target.name]: e.target.value,
      });

    const heanderTechNew = async (e)=>{
       dispach(saveImgMain(urlImg));
       setUtl({
            img: ""
        })
    }



    return (
        <div className={style.contNewTech}>
            <h2>Add Image Main</h2>
            <div className={style.contFormTech}>
                <input name='img' value={urlImg.img} onChange = {handleTechChange}  />
                <button onClick={heanderTechNew} >save</button>
            </div>

            <div className={style.contMains}>
            <div className={style.contImgs} >
                        <div className={style.btnAnt} >
                            <span onClick={handerAntImgs} > {"<"} </span>
                    </div>
                {
                    imgsMos ? imgsMos.map((elm, i) =>(
                        <div id={elm.id} key={i} className = {style.imgs} >
                            <img onClick={handleImgMainClick} id={elm.id} key={i} src={elm.img ? elm.img : ""} alt = "extras" />
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

export default ImgMain;

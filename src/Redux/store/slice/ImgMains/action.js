import axios from "axios";
import { img_main } from ".";

const localhost = "http://localhost:8090";

export const findAllImgsMain = ()=> async (dspiatch)=>{
    const { data } = await axios(`${localhost}/api/main`);
    dspiatch(img_main.setImgsMain(data));
}


export const saveImgMain = (urlImg) => async (dspiatch)=>{
    await axios.post("http://localhost:8090/api/main", urlImg);
    dspiatch(findAllImgsMain());
}
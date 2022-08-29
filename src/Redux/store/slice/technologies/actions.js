import axios from "axios";
import { tech } from "./index";

const localhost = "http://localhost:8090";

console.log("localhost", localhost)
// GET
export const fetchAllTechnologies = () => async(dispach) =>{
    const { data: result} = await axios(`${localhost}/api/technology`);
    dispach(tech.setTechnologies(result));
}


// POST
export const saveTechnology = (technologies) => async ( dispach ) =>{
    await axios.post(`${localhost}/api/technology`, technologies);
    dispach(fetchAllTechnologies());   
}


// PUT


// DELETE
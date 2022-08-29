import axios from "axios";
import { project } from "./index";

const localhost = "http://localhost:8090";

export const createProject = (newProject, idMain) => async (dispatch) => {
    await axios.post(`${localhost}/api/project/${idMain}`,newProject);
    dispatch(getAllProject());
}

export const getAllProject = () => async (dispatch)=>{
    const { data } = await axios(`${localhost}/api/project`);
    dispatch(project.setProjects(data));
}
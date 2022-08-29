import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import CardDetail from '../Components/Cards/CardDetail';
import Description from '../Components/Description/Description';
import { getProjectById } from '../Redux/store/slice/projects';
import style from "./ProjectDetail.module.css"

const ProjectDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { project } = useSelector(state => state.projects);

    useEffect(() => {
       
        dispatch(getProjectById(id));
    }, [dispatch, id]);

    return (
        <>
            {
                project.imgs ? 
                <div className={style.proyect} >
                {console.log("project.imgs", project)}
                    <CardDetail imgs={project.imgs} imgMain = {project.imgMain} />
                    <Description description={project.description} tecnologias = {project.technologies} />
                </div> : <div>no</div>}
        </>
    );
}

export default ProjectDetail;

/**
 
 {project ? <div>
                <CardDetail imgs={project.img.imgs} imgMain = {project.img.imgMain} />
            </div> : <div>no</div>}

 */

import React, { useEffect } from 'react';
import TypeProject from '../Components/TypeProject/TypeProject';
import WebSite from '../Components/WebSite/WebSite';
import Style from "./Projects.module.css";
import { useDispatch } from "react-redux";
import { recetPojectDetail } from '../Redux/store/slice/projects';
import { getAllProject } from '../Redux/store/slice/projects/actions';

const Projects = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(recetPojectDetail());
        dispatch(getAllProject());
    }, [dispatch]);

    return (
        <div>
            <div className={Style.project}>
                <h1>
                    PROJECTS
                </h1> 
            </div>
            <div>
                <TypeProject />
            </div>

            <div>
                <WebSite />
            </div>


        </div>
    );
}

export default Projects;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImgMain from '../Components/CreateProyect/ImgMain/ImgMain';
import Proyect from '../Components/CreateProyect/Proyect/Proyect';
import Technologies from '../Components/CreateProyect/Technologies/Technologies';
import { findAllImgsMain } from '../Redux/store/slice/ImgMains/action';
import {  createProject } from '../Redux/store/slice/projects/actions';
import { fetchAllTechnologies } from '../Redux/store/slice/technologies/actions';

const Admin = () => {
    

    const [project, setProject] = useState();
    const [imgMain, serImgProjectMain] = useState();
    const [techs, setTechs] = useState([])
    
    const [imgImgs, serImgProjectImgs] = useState({img: ""});
    const dispach = useDispatch();
    
    useEffect(() => {
        dispach(fetchAllTechnologies());
        dispach(findAllImgsMain());
    }, [dispach]);
    

    const handleClick = ()=>{
        const data = {
            name: project.name,
            description: project.description,
            technologies: techs
        }
        dispach(createProject(data, imgMain));
    }


    return (
        <div>
           
            <Technologies setTechs={setTechs} tech= {techs} />

            {
                console.log("tehcs", techs)
            }
                
            <ImgMain SetImgMain={serImgProjectMain} />

            {
                console.log("imgMain", imgMain)
            }
            
            <Proyect setNewProject={setProject} />

            {
                console.log("project", project)
            }

            <button  onClick={handleClick} >sumit</button>
            
        </div>
    );
}

export default Admin;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNameDescNewProyec } from '../../../Redux/store/slice/projects/actions';
import style from "./Proyect.module.css";

const Proyect = ({setNewProject}) => {

    const [proyect, setProyect] = useState({
        name: "",
        description: ""
    });

    const handleTechChange = (e) => setProyect({
        ...proyect,
        [e.target.name]: e.target.value,
      });

    const handleClick = (e) => {
        setNewProject(proyect);
    }

    return (
        <div className={style.cont} >

        <div className={style.proyect}>
            <h2>Proyect</h2>
        </div>
        <div className={style.contForm}>
        <div className={style.FromName}>
            <label>Name</label>
            <input name='name' value={proyect.name} onChange = {handleTechChange} />
        </div>
        <div className={style.FromDesc}>
            <label>Description</label>
            <textarea name='description' value={proyect.description} onChange = {handleTechChange}>
            </textarea>
        </div>
            <button onClick={handleClick} >accept</button>
        </div>
            
        </div>
    );
}

export default Proyect;

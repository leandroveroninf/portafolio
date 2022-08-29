import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { saveTechnology } from '../../../Redux/store/slice/technologies/actions';
import style from "./Technologies.module.css";

const Technologies = ({setTechs, tech}) => {
    const { list } = useSelector(state => state.technology);
    const [technologies, setTechnologies] = useState(list);
    const [techNew, setTechNew] = useState({name: ""});
    const [addTech, setAddTech] = useState(false);
    const dispach = useDispatch();

    useEffect(() => {
        setTechnologies(list);
    }, [list]);
    
    const heanderTechNew = async (e)=>{
        dispach(saveTechnology(techNew));
        setTechNew({name: ""})
    }

    const handleTechChange = (e) => setTechNew({
        ...techNew,
        [e.target.name]: e.target.value,
      });

    const handleSpanClick = (e)=>{
        setTechs([...tech, {id: e.target.id}])
        
    }

    const handleButtonClick = (_e)=>{
        setAddTech(!addTech);
    }

    return (
        <div>
            <div className={style.contSavedTech} >
                <h2>Saved Technologies</h2>
                <div className={style.listTech}>
                    {
                        technologies ? technologies.map((elm, i) =><span id={elm.id} onClick={handleSpanClick} key={i} >{elm.name}</span>)
                        : <h1>...</h1>
                    }
                </div>
            </div>

            <div>
                {
                    addTech ? (
                        <div>
                        <button className={style.btnClose} onClick={handleButtonClick} >X</button>
                        <div className={style.contNewTech}>
                            <h2>Add Technology</h2>
                                <div className={style.contFormTech}>
                                <input name='name' value={techNew.name} onChange = {handleTechChange}  />
                                <button onClick={heanderTechNew} >save</button>
                            </div>
                        </div>
                        </div>
                    ):(<button className={style.btnAdd} onClick={handleButtonClick} >Add</button>)
                }
            </div>

            


        </div>
    );
}

export default Technologies;

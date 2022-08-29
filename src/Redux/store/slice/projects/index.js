import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import webGamer from "../../../../imgs/imgVideoGamer.png";
import webClima from "../../../../imgs/webClima.jpeg";
import webSerie from "../../../../imgs/webSeries.jpeg";
// IMG ENCUESTA
import webEncMain from "../../../../imgs/webEncMain.jpeg";
import webEnc1 from "../../../../imgs/webEnc1.jpeg";
import webEnc2 from "../../../../imgs/webEnc2.jpeg";
import webEnc3 from "../../../../imgs/webEnc3.jpeg";
// IMG DOCUMENTACION JS
import webDocMain from "../../../../imgs/webDocMain.jpeg";
import webDoc1 from "../../../../imgs/webDoc1.jpeg";
// IMG TROMPETA
import webTrompMain from "../../../../imgs/webTrompMain.jpeg";
import webTromp1 from "../../../../imgs/webTromp1.jpeg";
import webTromp2 from "../../../../imgs/webTromp2.jpeg";


export const projectsSlice = createSlice({
    name : "projects",
    initialState : {
        list : [
            {
                id: 1,
                name: "CATALOGO VIDEOGAMER",
                imgMain: {img: webGamer},
                imgs: [],
                description : "Proyecto SPA en el cual mustra los catalogos de los videojuegos, en el cual podes crear un nuevo catalogo, despues se puede buscar y ver la descripcion de cada videojuegos, a la ves puedes eliminar los catalogos que creaste, se pueden hacer filtros, buscar por nombre, genero",
                tecnologis: [{name:"JavaScript"}, {name:"React.js"}, {name: "Node.js"}, {name: "CSS"}, {name: "Express"}, {name:"Redux"}, {name: "Redux Tooklit"},{name: "Posman"}, {name: "Sequalize"}, {name: "psgressql"}]
            },
            {
                id: 2,
                name: "ZOOPER TRIVIA",
                imgMain: {img: "http://salmawebservices.com/wp-content/uploads/2022/04/cropped-cropped-zooperTRIVIA-1536x906.jpg"},
                imgs: [],
                description : "A TRIVIA GAME IN ONLINE MULTIPLAYER MODE, WITH USER REGISTRATION, EXPERIENCE LEVEL AND COINS.",
                tecnologis: [{name:"JavaScript"}, {name:"React.js"}, {name: "Node.js"}, {name: "CSS"}, {name: "Express"}, {name:"Redux"}, {name: "Redux Tooklit"},{name: "Posman"}, {name: "Sequalize"}, {name: "psgressql"}, {name: "Socket.io"}, {name: "Fire base"}]
            },
            {
                id: 3,
                name: "CLIMA",
                imgMain: {img: webClima},
                imgs: [],
                description : "A TRIVIA GAME IN ONLINE MULTIPLAYER MODE, WITH USER REGISTRATION, EXPERIENCE LEVEL AND COINS.",
                tecnologis: [{name:"JavaScript"}, {name:"React.js"}, {name: "CSS"}, {name:"Redux"}, {name: "Redux Tooklit"}]
            },
            {
                id: 4,
                name: "SERIE PELICULAS",
                imgMain: {img: webSerie},
                imgs: [],
                description : "A TRIVIA GAME IN ONLINE MULTIPLAYER MODE, WITH USER REGISTRATION, EXPERIENCE LEVEL AND COINS.",
                tecnologis: [{name:"JavaScript"}, {name:"React.js"}, {name: "CSS"}, {name:"Redux"}, {name: "Redux Tooklit"}]
            },
            {
                id: 5,
                name: "ENCUESTA",
                imgMain: {img: webEncMain},
                imgs: [{img:webEnc1}, {img: webEnc2}, {img: webEnc3}],
                description : "A TRIVIA GAME IN ONLINE MULTIPLAYER MODE, WITH USER REGISTRATION, EXPERIENCE LEVEL AND COINS.",
                tecnologis: [{name:"JavaScript"}, {name:"React.js"}, {name: "CSS"}, {name:"Redux"}, {name: "Redux Tooklit"}]
            },
            {
                id: 6,
                name: "DOCUMENTACION JS",
                imgMain: {img: webDocMain},
                imgs: [{img: webDoc1}],
                description : "A TRIVIA GAME IN ONLINE MULTIPLAYER MODE, WITH USER REGISTRATION, EXPERIENCE LEVEL AND COINS.",
                tecnologis: [{name:"JavaScript"}, {name:"React.js"}, {name: "CSS"}, {name:"Redux"}, {name: "Redux Tooklit"}]
            },
            {
                id: 7,
                name: "ALQUILER DE TROMPETISTAS",
                imgMain: {img: webTrompMain},
                imgs: [{img: webTromp1}, {img: webTromp2}],
                description : "A TRIVIA GAME IN ONLINE MULTIPLAYER MODE, WITH USER REGISTRATION, EXPERIENCE LEVEL AND COINS.",
                tecnologis: [{name:"JavaScript"}, {name:"React.js"}, {name: "CSS"}, {name:"Redux"}, {name: "Redux Tooklit"}]
            }
        ],
        project: {},
        newProyect: {
            name: "",
            description: "",
            tecnologis: []
        }
    },
    reducers : {
        setProjects: (state, action) =>{
            state.list = action.payload;
        },

        getProjectById: (state, action) =>{
            state.project = state.list.find(elm => `${elm.id}` ===  action.payload);
        },

        recetPojectDetail: (state, _action) => {
            state.project = {};
        },

        setNewProjNameDesc: (state, action) => {
            state.newProyect.name = action.payload.name;
            state.newProyect.description = action.payload.description;
        },
        addTechNewProj: (state, action) => {
            state.newProyect.tecnologis.push(action.payload);
        }
    }
});


export const project = projectsSlice.actions;

export const { setProjects, getProjectById, recetPojectDetail, setTechnologies } = projectsSlice.actions;


export default projectsSlice.reducer;

// funcion asincrona
export const fetchAllProject = () =>{
    return async (dispach)=>{

        const { data: resut } = await axios("https://reqres.in/api/user");

        dispach(setProjects(resut.data));
    }
}





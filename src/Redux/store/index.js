import { configureStore } from "@reduxjs/toolkit";

// Reducer
import projects from "./slice/projects";
import technology from "./slice/technologies";
import imgMain  from "./slice/ImgMains"

export default configureStore({
    reducer : {
        projects,
        technology,
        imgMain
    }
})
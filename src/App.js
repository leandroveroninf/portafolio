import Home from './Pages/Home';
import {Route, Routes} from  "react-router-dom"
import Header from './Components/Header/Header';
import Projects from './Pages/Projects';
import ProjectDetail from "./Pages/ProjectDetail";
import Admin from './Pages/Admin';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path='/projects' element = {<Projects />} />
        <Route exact path='/projects/detail/:id' element={<ProjectDetail />} />
        <Route exact path='/admin' element = {<Admin />} />
      </Routes>    

    </div>
  );
}

export default App;

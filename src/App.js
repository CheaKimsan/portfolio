import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Modules/Layout";
import './App.css';
import HomePage from "./Modules/Components/HomePage";
import Skill from "./Modules/Components/Skill";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'skill'} element={<Skill/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

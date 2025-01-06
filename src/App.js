import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Modules/Layout";
import './App.css';
import HomePage from "./Modules/Components/HomePage";
import Skill from "./Modules/Components/Skill";
import {useEffect} from "react";


function App() {
    useEffect(() => {
        changeFavicon("/solid-code.ico");
    }, []);

    const changeFavicon = (iconPath) => {
        const link = document.querySelector("link[rel='icon']");
        if (link) {
            link.href = iconPath;
        }
    };
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/skill'} element={<Skill/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

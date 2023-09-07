import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Card from "./components/Cards.jsx";
import Descriptif from "./components/Descriptif";
import Social from "./components/Social";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
    return (
        <>
            <Navbar />
            <Social />
            <Header />
            <Card />
            <Descriptif />
            <Skills />
            <Projects />
        </>
    );
}

export default App;

import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Card from "./components/Cards.jsx";
import Descriptif from "./components/Descriptif";
import Social from "./components/Social";

function App() {
    return (
        <>
            <Navbar />
            <Social />
            <Header />
            <Card />
            <Descriptif />
        </>
    );
}

export default App;

import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Card from "./components/Cards.jsx";
import Descriptif from "./components/Descriptif";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Card />
            <Descriptif />
        </>
    );
}

export default App;

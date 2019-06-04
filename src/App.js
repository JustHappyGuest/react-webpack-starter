import React from "react";
import "./style.module.css";

import Logo from "./components/Logo.jsx";

const App = (props) => {
    return (
        <div className="app">
           <Logo {...props} />
           <aside className="aside">
           asdasd</aside>
        </div>
    );
}

export default App;
import React from "react";
import { Outlet } from "react-router-dom";


const About = () => {
    return (
        <div>
        <div>
            <h1>This is About page</h1>
            <Outlet/>
        </div>
        <button><a className="back-home" href="/">Back Home</a></button>
        </div>
    )
}

export default About;